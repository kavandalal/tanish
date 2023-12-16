import mongoose, { Schema } from 'mongoose';
import event from './event.types';

const eventSchema = new Schema<event>(
	{
		name: { type: String, trim: true, required: true },
		start: { type: Date },
		end: { type: Date },
		venue: { type: String, trim: true, required: true },
		address: { type: String },
		description: { type: String },
		map: { type: String, required: true },
		isPrivate: { type: Boolean, default: false },
	},
	{
		toJSON: {
			transform(doc, ret) {
				delete ret.__v;
			},
		},
		timestamps: true,
	}
);

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
