import mongoose, { Schema } from 'mongoose';
import post from './post.types';

const postSchema = new Schema<post>(
	{
		eventRef: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
		createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
		caption: { type: String, trim: true },
		source: { type: String, trim: true },
		likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
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

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
