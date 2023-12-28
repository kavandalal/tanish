import BadRequestError from '@/error-handler/bad-request';
import CustomError from '@/error-handler/custom-error';
import ErrorHandler from '@/error-handler/error-handler';
import connectMongoDB from '@/lib/mongodb';
import { checkMongooseRef } from '@/lib/server-helper';
import Post from '@/model/post';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { postID: string } }) {
	try {
		const postRef = params.postID;
		if (!postRef) throw new BadRequestError('Post ID is required');
		if (!checkMongooseRef(postRef)) throw new BadRequestError('Post ID is not valid!!!');

		await connectMongoDB();

		await Post.updateOne({ _id: postRef }, { $inc: { downloadCount: 1 } }, { upsert: true });
		return NextResponse.json({ ok: true });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
