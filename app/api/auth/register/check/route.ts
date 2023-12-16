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

const signJWT = async (payload: { userRef: string; role: string }, options: { exp: string }) => {
	try {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		const alg = 'HS256';
		return (
			new SignJWT(payload)
				.setProtectedHeader({ alg })
				.setExpirationTime(options.exp)
				.setIssuedAt()
				// .setSubject(payload.userRef)
				.sign(secret)
		);
	} catch (error) {
		throw error;
	}
};
type login = { phone: string; email: string };

export async function POST(req: NextRequest) {
	let data: login = await req.json();
	try {
		console.log('inside POST register');
		data = await validatePOST(data);

		await connectMongoDB();

		let userExists = await User.findOne({ $or: [{ email: data.email }, { phone: data.phone }] });
		let packet;
		if (userExists) {
			packet = { user: userExists, next: false };
			const token = await signJWT({ userRef: userExists?._id, role: userExists?.role || 'user' }, { exp: `20d` });
			const tokenName = `token-${process.env.EVENT_NAME}`;
			const response = NextResponse.json({ ok: true, packet });
			response.cookies.set(tokenName, token);
			return response;
		}
		// throw new BadRequestError('User with email already exists!!!');
		packet = { user: null, next: true };
		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

const validatePOST = async (body: login) => {
	if (!body.email && !body.phone) throw new BadRequestError('Phone or Email is required');

	return body;
};
