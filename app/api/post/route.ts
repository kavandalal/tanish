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

export async function POST(req: NextRequest) {
	try {
		let data: postType = await req.json();
		data = await validatePOST(data);

		await connectMongoDB();

		const packet = await Post.create(data);

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

const validatePOST = async (body: postType) => {
	if (!body.eventRef) throw new BadRequestError('EventRef is required');
	if (!body.source) throw new BadRequestError('Source is required');
	if (!body.caption) throw new BadRequestError('Caption is required');
	if (!body.createdBy) throw new BadRequestError('CreatedBy is required');

	return body;
};
