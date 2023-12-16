import { Types } from 'mongoose';

export default interface post {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	eventRef: Types.ObjectId;
	source: string;
	caption: string;
	createdBy: Types.ObjectId;
	likes: [Types.ObjectId];
}
