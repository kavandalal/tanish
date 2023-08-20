import mongoose from 'mongoose';

let cachedConnection: typeof mongoose | null = null;

const connectMongoDB = async () => {
	if (cachedConnection) return cachedConnection;

	try {
		const uri: string = process.env.MONGODB_URI || '';
		if (!uri) return new Error('Mongo URI is not valid!!');

		console.log({ uri });

		const connection = await mongoose.connect(uri);
		cachedConnection = connection;

		console.log('connected to DB...');
	} catch (err) {
		console.log(err);
	}
};

export default connectMongoDB;
