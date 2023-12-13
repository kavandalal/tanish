import CustomError from '@/error-handler/custom-error';

class InternalServerError extends CustomError {
	statusCode = 500;

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, InternalServerError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}

export default InternalServerError;
