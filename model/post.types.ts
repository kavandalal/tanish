import { Types } from 'mongoose';

export default interface post {
	eventRef: Types.ObjectId;
	source: String;
	caption: String;
	createdBy: Types.ObjectId;
	likes: [Types.ObjectId];
}
