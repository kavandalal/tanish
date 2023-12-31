import connectMongoDB from '@/lib/mongodb';
import User from '@/model/user';
import userType from '@/model/user.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import Error from 'next/error';
import { checkMongooseRef } from '@/lib/server-helper';

export async function GET(req: any) {
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

export async function PATCH(req: Request, { params }: { params: { userID: string } }) {
	try {
		const data: userType & { userRef: string } = await req.json();

		const userRef = data.userRef;
		if (!userRef) throw new BadRequestError('User ID is required');
		if (!checkMongooseRef(userRef)) throw new BadRequestError('User ID is not valid!!!');

		await connectMongoDB();

		let packet = await User.findOneAndUpdate({ _id: userRef }, data, { new: true });
		if (!packet) throw new BadRequestError('User does not exists!!!');

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
