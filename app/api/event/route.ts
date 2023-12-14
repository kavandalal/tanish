import connectMongoDB from '@/lib/mongodb';
import Event from '@/model/event';
import eventType from '@/model/event.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import Error from 'next/error';

export async function GET() {
	try {
		await connectMongoDB();
		let packet = await Event.find({ isPrivate: false }).sort('createdAt');

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}
