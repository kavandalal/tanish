import mongoose, { Schema } from 'mongoose';
import user from './user.types';

const userSchema = new Schema<user>(
	{
		name: { type: String, trim: true },
		email: { type: String, trim: true, unique: true, index: true },
		phone: { type: String, trim: true },
		side: { type: String, enum: ['bride', 'groom', 'dev'], index: true, default: 'groom' },
		role: { type: String, enum: ['user', 'admin'], default: 'user' },
		postsRef: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
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

const User = mongoose?.models?.User || mongoose.model('User', userSchema);

export default User;
