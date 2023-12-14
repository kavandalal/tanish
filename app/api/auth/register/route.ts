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

export async function POST(req: NextRequest) {
	let data: userType = await req.json();
	try {
		console.log('inside POST register');
		data = await validatePOST(data);

		await connectMongoDB();

		let userExists = await User.findOne({ email: data.email });
		let packet;
		if (userExists) {
			packet = userExists;
		} else {
			packet = await User.create(data);
		}
		const token = await signJWT({ userRef: packet?._id, role: packet?.role || 'user' }, { exp: `20d` });
		const tokenName = `token-${process.env.EVENT_NAME}`;
		const response = NextResponse.json({ ok: true, packet });
		// throw new BadRequestError('User with email already exists!!!');

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

const validatePOST = async (body: userType) => {
	if (!body.name) throw new BadRequestError('Name is required');
	if (!body.side) throw new BadRequestError('Ladkewale ya Ladkiwale ?');
	if (!body.email && !body.phone) throw new BadRequestError('Email or Phone number is required');

	body.role = 'user';

	return body;
};
