import connectMongoDB from '@/lib/mongodb';
import Event from '@/model/event';
import eventType from '@/model/event.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';
import CustomError from '@/error-handler/custom-error';
import InternalServerError from '@/error-handler/internal-server';

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

const validatePOST = async (body: eventType) => {
	if (!body.name) throw new BadRequestError('Event Name is required');

	return body;
};
