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
type adminLogin = {
	username: string;
	password: string;
};

export async function POST(req: NextRequest) {
	let data: adminLogin = await req.json();
	try {
		data = await validatePOST(data);

		await connectMongoDB();

		let token, packet;
		if (data.username !== process.env.ADMIN_USERNAME || data.password !== process.env.ADMIN_PASSWORD) {
			throw new BadRequestError('Username or Password incorrect');
		}

		let userExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
		if (!userExists) {
			throw new BadRequestError('Admin does not exist');
		}
		token = await signJWT({ userRef: userExists?._id, role: userExists?.role }, { exp: `20d` });
		const tokenName = `token-${process.env.EVENT_NAME}`;
		const response = NextResponse.json({ ok: true, packet });

		response.cookies.set(tokenName, token);

		return response;
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

const validatePOST = async (body: adminLogin) => {
	if (!body.username) throw new BadRequestError('Username is required');
	if (!body.password) throw new BadRequestError('Password is required');

	return body;
};
