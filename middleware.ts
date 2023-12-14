import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Unauthorized from './error-handler/unauthorized-request';
import ErrorHandler from './error-handler/error-handler';
import { jwtVerify } from 'jose';
import InternalServerError from './error-handler/internal-server';

export const verifyJWT = async <T>(token: string): Promise<T> => {
	try {
		return (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as T;
	} catch (error) {
		console.log(error);
		throw new Unauthorized('Token is invalid!');
	}
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

		let isValid: { role: string; userRef: string };
		if (cookie && cookie.value && secret) {
			isValid = await verifyJWT(cookie.value);
			const isAdminroute = isAdminRoute(request?.url);
			// console.log('is admin-route', isAdminroute, ',, role =', isValid?.role);

			if (isAdminroute && isValid?.role !== 'admin') {
				const response = NextResponse.redirect(new URL('/feed', request.url));
				return response;
			}

			// const response = NextResponse.next();
			// return response;

			const requestHeaders = new Headers(request.headers);
			requestHeaders.set('token-decode', JSON.stringify(isValid));

			return NextResponse.next({
				request: {
					headers: requestHeaders,
				},
			});
		}

		throw new InternalServerError('Something went wrong!');
	} catch (err) {
		if (err instanceof Unauthorized) {
			return ErrorHandler(err);
		}
	}
}

export const config = {
	matcher: ['/api/user', '/api/event', '/api/admin/user/:path*', '/api/admin/event/:path*', '/api/admin/post/:path*'],
};
