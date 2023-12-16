import connectMongoDB from '@/lib/mongodb';
import User from '@/model/user';
import userType from '@/model/user.types';
import { NextResponse, NextRequest } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import Error from 'next/error';
import { SignJWT } from 'jose';

export async function GET(request: NextRequest) {
	try {
		const tokenName = `token-${process.env.EVENT_NAME}`;
		console.log('Logout', tokenName);

		const response = NextResponse.json({ ok: true });
		response.cookies.delete(tokenName);
		return response;
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
