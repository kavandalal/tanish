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
		if (!checkMongooseRef(postRef)) return NextResponse.redirect(new URL(`/feed/`, req.url));

		await connectMongoDB();

		let packet = await Post.findById({ _id: postRef }).populate('createdBy likes');
		// .populate({ path: 'createdBy', model: 'User' });
		// .populate({ path: 'likes', model: 'User' });

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
