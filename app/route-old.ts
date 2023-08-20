import connectMongoDB from '@/lib/mongodb';
import User from '@/model/user';
import userType from '@/model/user.types';
import { NextResponse } from 'next/server';
import BadRequestError from '@/error-handler/bad-request';
import ErrorHandler from '@/error-handler/error-handler';

// export async function POST(req: Request) {
// 	const data: userType = await req.json();
// 	try {
// 		await connectMongoDB();
// 		console.log('called');
// 		const userExists = await User.findOne({ email: data.email });
// 		if (userExists) {
// 			// throw new Error('User with email already exists!!!');
// 			throw new BadRequestError('User with email already exists!!!');
// 		}

// 		const packet = await User.create(data);

// 		return NextResponse.json({ ok: true, packet });
// 	} catch (err :Error ) {
// 		ErrorHandler(err.message);
// 		// console.error(err.message);
// 		// return NextResponse.json({ ok: false, message: err.message });
// 	}
// }

// export async function GET() {
// 	await connectMongoDB();

// 	const packet = { name: 'kavan' };

// 	return NextResponse.json({ ok: true, packet });
// }
