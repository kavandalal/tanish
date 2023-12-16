import connectMongoDB from '@/lib/mongodb';
import Event from '@/model/event';
import eventType from '@/model/event.types';
import { NextRequest, NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import Error from 'next/error';

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const isPrivate = searchParams.get('isPrivate') || false;

		const filter = isPrivate ? {} : { isPrivate };

		await connectMongoDB();
		let list = await Event.find(filter).sort('start');

		return NextResponse.json({ ok: true, packet: { list, default: list?.[0]?._id } });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
