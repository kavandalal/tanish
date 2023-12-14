import connectMongoDB from '@/lib/mongodb';
import User from '@/model/user';
import userType from '@/model/user.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import type { NextApiRequest } from 'next';
import { checkMongooseRef } from '@/lib/server-helper';

export async function DELETE(req: NextApiRequest, { params }: { params: { userID: string } }) {
	try {
		const userRef = params.userID;
		if (!checkMongooseRef(userRef)) throw new BadRequestError('User ID is not valid!!!');

		await connectMongoDB();

		let packet = await User.findOneAndDelete({ _id: userRef });
		if (!packet) throw new BadRequestError('User does not exists!!!');

		return NextResponse.json({ ok: true });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
