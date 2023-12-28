import connectMongoDB from '@/lib/mongodb';
import { NextResponse, NextRequest } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMongooseRef } from '@/lib/server-helper';
import Post from '@/model/post';

export async function GET(req: NextRequest, { params }: { params: { eventID: string } }) {
	try {
		const eventRef = params.eventID;
		if (!eventRef) throw new BadRequestError('Event ID is required');
		// if (!checkMongooseRef(eventRef)) throw new BadRequestError('Event ID is not valid!!!');

		const searchParams = req.nextUrl.searchParams;
		const page: number = Number(searchParams.get('page')) || 1;
		let limit: number = Number(searchParams.get('limit')) || 15;
		limit = limit <= 15 ? limit : 15;

		// type filterQuery = 'new' | 'old' | 'liked';
		let filterQuery: string = searchParams?.get('filter') || 'new';
		const filter = { createdAt: 0, likes: 0 };
		if (filterQuery === 'new') {
			filter.createdAt = -1;
		} else if (filterQuery === 'new') {
			filter.createdAt = 1;
		} else {
			filter.likes = -1;
		}

		await connectMongoDB();

		let list, total
		if (eventRef == 'all'){
			list = await Post.find().sort('-createdAt').skip(limit * (page - 1)).limit(limit).populate('createdBy');
			total = await Post.countDocuments()
		}else { 
			list =  await Post.find({ eventRef })
			.sort(filter as any)
			.skip(limit * (page - 1))
			.limit(limit)
			.populate('createdBy');
			total = await Post.countDocuments({ eventRef });
		}

		return NextResponse.json({ ok: true, packet: { list, total, page, limit } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
