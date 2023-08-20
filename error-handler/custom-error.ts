class CustomError extends Error {
	statusCode: number | undefined;

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, CustomError.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}

export default CustomError;
