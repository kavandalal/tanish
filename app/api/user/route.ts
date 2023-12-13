import connectMongoDB from '@/lib/mongodb';
import User from '@/model/user';
import userType from '@/model/user.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import Error from 'next/error';

export async function GET() {
	try {
		await connectMongoDB();
		let packet = await User.find().sort('createdAt');

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export async function POST(req: Request) {
	const data: userType = await req.json();
	try {
		await validatePOST(data);

		await connectMongoDB();

		let userExists = await User.findOne({ email: data.email });
		if (userExists) {
			throw new BadRequestError('User with email already exists!!!');
		}
		userExists = await User.findOne({ phone: data.phone });
		if (userExists) {
			throw new BadRequestError('User with phone number already exists!!!');
		}

		const packet = await User.create(data);

		return NextResponse.json({ ok: true, packet });
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

	return body;
};
