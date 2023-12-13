import { Types } from 'mongoose';

export default interface post {
	eventRef: Types.ObjectId;
	caption: String;
	likes: [Types.ObjectId];
	createdAt: Date;
	createdBy: Types.ObjectId;
}
