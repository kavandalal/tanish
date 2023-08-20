import CustomError from '@/error-handler/custom-error';

class BadRequestError extends CustomError {
	statusCode = 400;
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}

export default BadRequestError;
