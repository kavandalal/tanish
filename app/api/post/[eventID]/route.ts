import connectMongoDB from '@/lib/mongodb';
import { NextResponse, NextRequest } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMongooseRef } from '@/lib/server-helper';
import Post from '@/model/post';

export async function GET(req: NextApiRequest, { params }: { params: { eventID: string } }) {
	try {
		const eventRef = params.eventID;
		if (!eventRef) throw new BadRequestError('Event ID is required');
		if (!checkMongooseRef(eventRef)) throw new BadRequestError('Event ID is not valid!!!');

		let page: number = Number(req.query?.page) || 1;
		let limit: number = Number(req.query?.limit) || 15;
		limit = limit > 15 ? 15 : limit;

		await connectMongoDB();

		let list = await Post.find({ eventRef })
			.sort({ createdAt: -1 })
			.skip(limit * (page - 1))
			.limit(limit);

		let total = await Post.countDocuments({ eventRef });

		return NextResponse.json({ ok: true, packet: { list, total, page, limit } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
