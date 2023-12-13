import { Types } from 'mongoose';

export const checkMongooseRef = (id: string): boolean => {
	return !!id && Types.ObjectId.isValid(id);
};
