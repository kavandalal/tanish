import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema(
	{
		name: { type: String, trim: true, required: true },
		start: { type: Date },
		end: { type: Date },
		venue: { type: String, trim: true },
		address: { type: String },
		description: { type: String },
		pincode: { type: String },
		map: { type: String },
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
