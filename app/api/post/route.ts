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

const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const Bucket = process.env.BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const expiresIn = 5 * 60;

const s3Config = { region: AWS_REGION };

const s3Client = new S3Client(s3Config);

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
	// if (!body.createdBy) throw new BadRequestError('CreatedBy is required');

	const headersList = headers();
	console.log('in post', headersList.get('token-decode'));
	const middlewareSet = JSON.parse(headersList.get('token-decode') || '{}');

	body.createdBy = middlewareSet?.userRef;
	body.downloadCount = 0;
	if (!body.createdBy) throw new BadRequestError('CreatedBy is required');

	return body;
};

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const page: number = Number(searchParams.get('page')) || 1;
		let limit: number = Number(searchParams.get('limit')) || 15;
		limit = limit > 15 ? 15 : limit;

		// type filterQuery = 'new' | 'old' | 'liked';
		let filterQuery: string = searchParams?.get('filter') || 'new';
		const filter = { likes: -1, createdAt: -1 };
		filter.likes = -1;

		await connectMongoDB();

		let list = await Post.find({})
			.sort(filter as any)
			.skip(limit * (page - 1))
			.limit(limit);
		// .populate('createdBy');

		let total = await Post.countDocuments({});

		return NextResponse.json({ ok: true, packet: { list, total, page, limit } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
