import CustomError from '@/error-handler/custom-error';

class Unauthorized extends CustomError {
	statusCode = 401;

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, Unauthorized.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}

export default Unauthorized;
