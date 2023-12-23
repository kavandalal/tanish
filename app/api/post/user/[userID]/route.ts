import BadRequestError from '@/error-handler/bad-request';
import CustomError from '@/error-handler/custom-error';
import ErrorHandler from '@/error-handler/error-handler';
import connectMongoDB from '@/lib/mongodb';
import { checkMongooseRef } from '@/lib/server-helper';
import Post from '@/model/post';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { userID: string } }) {
	try {
		const userRef = params.userID;
		if (!userRef) throw new BadRequestError('User ID is required');
		if (!checkMongooseRef(userRef)) return NextResponse.redirect(new URL(`/profile`, req.url));

		await connectMongoDB();

		let list = await Post.find({ createdBy: userRef }).sort({ createdAt: -1 });

		return NextResponse.json({ ok: true, packet: { list } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
