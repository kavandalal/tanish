import BadRequestError from '@/error-handler/bad-request';
import CustomError from '@/error-handler/custom-error';
import ErrorHandler from '@/error-handler/error-handler';
import connectMongoDB from '@/lib/mongodb';
import { checkMongooseRef } from '@/lib/server-helper';
import Event from '@/model/event';
import eventType from '@/model/event.types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const data: eventType = await req.json();
	try {
		await validatePOST(data);

		await connectMongoDB();

		const name = data.name
			.split(' ')
			.map((i) => `${i.charAt(0)?.toUpperCase()}${i.slice(1).toLowerCase()}`)
			.join(' ');
		let eventExists = await Event.findOne({ name });
		if (eventExists) {
			throw new BadRequestError(`Event with name ${name} already exists!!!`);
		}

		const packet = await Event.create(data);

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
		const data: eventType & { eventRef: string } = await req.json();

		const eventRef = data?.eventRef;
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

const validatePOST = async (body: eventType) => {
	if (!body.name) throw new BadRequestError('Event Name is required');
	if (!body.map) throw new BadRequestError('Event map location is required');
	if (!body.venue) throw new BadRequestError('Venue Name is required');

	return body;
};
