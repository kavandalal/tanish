import connectMongoDB from '@/lib/mongodb';
import Post from '@/model/post';
import postType from '@/model/post.types';
import { NextResponse, NextRequest } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMongooseRef } from '@/lib/server-helper';
import { headers } from 'next/headers';

export async function PATCH(req: NextRequest, { params }: { params: { postID: string } }) {
	try {
		const headersList = headers();
		const middlewareSet = JSON.parse(headersList.get('token-decode') || '');

		const postRef = params.postID;
		if (!postRef) throw new BadRequestError('Post ID is required');
		if (!checkMongooseRef(postRef)) throw new BadRequestError('Post ID is not valid!!!');

		let data: { mode: string } = await req.json();

		await connectMongoDB();
		if (data?.mode === 'add') {
			await Post.updateOne({ _id: postRef }, { $addToSet: { likes: middlewareSet?.userRef } });
		} else {
			await Post.updateOne({ _id: postRef }, { $pull: { likes: middlewareSet?.userRef } });
		}

		return NextResponse.json({ ok: true, packet: { updated: middlewareSet?.userRef } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
