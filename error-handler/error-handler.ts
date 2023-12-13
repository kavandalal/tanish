import { NextApiHandler } from 'next';
import { NextResponse } from 'next/server';
import CustomError from '@/error-handler/custom-error';

const ErrorHandler = (err: Error) => {
	if (err instanceof CustomError) {
		const errArray = err.serializeErrors();
		return NextResponse.json({ ok: false, errors: errArray });
	}

	const defaultErr = 'Unhandled Server Error';
	return NextResponse.json(
		{
			ok: false,
			errors: [{ message: defaultErr, err }],
		},
		{ status: 400 }
	);
};

export default ErrorHandler;
