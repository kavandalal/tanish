import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Unauthorized from './error-handler/unauthorized-request';
import ErrorHandler from './error-handler/error-handler';
import { jwtVerify } from 'jose';
import InternalServerError from './error-handler/internal-server';

export const verifyJWT = async <T>(token: string): Promise<T> => {
	try {
		return  (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as T;
	} catch (error) {
		console.log(error);
		throw new Unauthorized('Token is invalid!');
	}
};

const appPages = ['/feed', '/explore', '/upload', '/timeline', '/profile'];

const isAppRoute = (url: string) => {
	for (let i of appPages) {
		if (url?.includes(i)) return true;
	}
	return false;
};

const isAdminRoute = (url: string) => {
	return url.includes('/admin');
};

export async function middleware(request: NextRequest) {
	try {
		// Assume a "Cookie:nextjs=fast" header to be present on the incoming request
		// Getting cookies from the request using the `RequestCookies` API
		const tokenName = `token-${process.env.EVENT_NAME}`;
		let cookie = request.cookies.get(tokenName);
		const secret = process.env.JWT_SECRET;

		const goToURL = request?.nextUrl?.pathname;
		const redirect = goToURL ? `?redirect=${goToURL}` : '';
		if ((!cookie || !cookie?.value) && goToURL?.split('/')?.join('')) {
			return NextResponse.redirect(new URL(`/${redirect}`, request.url));
		}

		let isValid: { role: string; userRef: string };
		if (!cookie || !cookie.value || !secret) {
			throw new InternalServerError('Something went wrong!');
		}

		isValid = await verifyJWT(cookie.value);

		const requestHeaders = new Headers(request.headers);
		requestHeaders.set('token-decode', JSON.stringify(isValid));

		if ( goToURL === '/' && !!isValid?.role && cookie && !!cookie?.value ){ 
			return NextResponse.redirect(new URL(`/feed`, request.url));
		}

		const isProfilePage = goToURL === '/profile';
		if (isProfilePage) {
			return NextResponse.redirect(new URL(`/profile/${isValid?.userRef}`, request.url));
		}

		const isAdminroute = isAdminRoute(request?.url);
		if (isAdminroute && isValid?.role !== 'admin') {
			const response = NextResponse.redirect(new URL('/feed', request.url));
			return response;
		}

		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
	} catch (err) {
		if (err instanceof Unauthorized) {
			return ErrorHandler(err);
		}
	}
}

export const config = {
	matcher: [
		// APP PAGES
		'/',
		'/feed/:path*',
		'/explore',
		'/upload',
		'/timeline',
		'/profile/:path*',
		// API ROUTES
		'/api/user/:path*',
		'/api/event/:path*',
		'/api/post/:path*',
		'/api/admin/user/:path*',
		'/api/admin/:path*',
		// ADMIN PAGES
		'/admin/:path*',
	],
};
