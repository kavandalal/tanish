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

		let data: postType = await req.json();

		await connectMongoDB();
		const postData = await Post.findById(postRef);
		if (middlewareSet?.userRef !== postData.createdBy && middlewareSet?.role !== 'admin')
			throw new BadRequestError('You cannot edit the post!!!');

		const packet = await Post.findOneAndUpdate({ _id: postRef }, data, { new: true });

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export async function DELETE(req: any, { params }: { params: { postID: string } }) {
	try {
		const headersList = headers();
		const middlewareSet = JSON.parse(headersList.get('token-decode') || '');

		const postRef = params.postID;
		if (!postRef) throw new BadRequestError('Post ID is required');
		if (!checkMongooseRef(postRef)) throw new BadRequestError('Event ID is not valid!!!');

		await connectMongoDB();

		const postData = await Post.findById(postRef);
		if (middlewareSet?.userRef !== postData.createdBy) throw new BadRequestError('You cannot delete the post!!!');

		let packet = await Post.findOneAndDelete({ _id: postRef });
		if (!packet) throw new BadRequestError('Event does not exists!!!');

		return NextResponse.json({ ok: true });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
