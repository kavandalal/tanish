import connectMongoDB from '@/lib/mongodb';
import Event from '@/model/event';
import eventType from '@/model/event.types';
import { NextResponse, NextRequest } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkMongooseRef } from '@/lib/server-helper';

export async function GET(req: NextRequest, { params }: { params: { eventID: string } }) {
	try {
		const eventRef = params.eventID;
		if (!checkMongooseRef(eventRef)) throw new BadRequestError('Event ID is not valid!!!');

		await connectMongoDB();

		let packet = await Event.findOne({ _id: eventRef, isPrivate: false });
		if (!packet) throw new BadRequestError('Event does not exists!!!');

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export async function PATCH(req: Request, { params }: { params: { eventID: string } }) {
	try {
		const data: eventType = await req.json();

		const eventRef = params.eventID;
		if (!checkMongooseRef(eventRef)) throw new BadRequestError('Event ID is not valid!!!');

		await connectMongoDB();

		let packet = await Event.findOneAndUpdate({ _id: eventRef }, data, { new: true });
		if (!packet) throw new BadRequestError('Event does not exists!!!');

		return NextResponse.json({ ok: true, packet });
	} catch (err) {
		if (err instanceof CustomError) {
			return ErrorHandler(err);
		} else {
			throw err;
		}
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { eventID: string } }) {
	try {
		const eventRef = params.eventID;
		if (!checkMongooseRef(eventRef)) throw new BadRequestError('Event ID is not valid!!!');

		await connectMongoDB();

		let packet = await Event.findOneAndDelete({ _id: eventRef });
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
