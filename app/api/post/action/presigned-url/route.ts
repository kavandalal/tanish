// import connectMongoDB from '@/lib/mongodb';
// import Post from '@/model/post';
// import postType from '@/model/post.types';
import { NextResponse, NextRequest } from 'next/server';
// import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
// import InternalServerError from '@/error-handler/internal-server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { checkMongooseRef } from '@/lib/server-helper';
// import { headers } from 'next/headers';
import { nanoid } from 'nanoid';
import BadRequestError from '@/error-handler/bad-request';

const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const Bucket = process.env.BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const expiresIn = 5 * 60;

const s3Config = { region: AWS_REGION };

const s3Client = new S3Client(s3Config);

export async function POST(req: NextRequest) {
	try {
		let { ext, type }: { ext: string; type: 'post' } = await req.json();

		const baseFolder = type;
		const fileName = `${nanoid(10)}.${ext}`;

		const Key = `${baseFolder}/${fileName}`;

		const command = new PutObjectCommand({ Bucket, Key });

		const url = await getSignedUrl(s3Client, command, { expiresIn });

		return NextResponse.json({ ok: true, packet: { s3Data: { url, source: Key } } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export const getImage = async ({ source }: { source: string }): Promise<string> => {
	if (!source) throw new BadRequestError('Image Source is required');

	const command = new GetObjectCommand({ Bucket, Key: source });
	const url = await getSignedUrl(s3Client, command, { expiresIn });
	return url;
};

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const source = searchParams.get('source') || false;

		const url = source && (await getImage({ source }));
		return NextResponse.json({ ok: true, packet: url });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export const deleteImage = async ({ source }: { source: string }): Promise<boolean> => {
	if (!source) throw new BadRequestError('Image Source is required');

	const Key = source;

	s3Client.send(new DeleteObjectCommand({ Bucket, Key })).then(() => console.log('S3 file deleted!', Key));
	return true;
};

export async function DELETE(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const source = searchParams.get('source') || false;

		const Key = source;
		s3Client.send(new DeleteObjectCommand({ Bucket, Key })).then(() => console.log('S3 file deleted!', Key));

		return NextResponse.json({ ok: true });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
