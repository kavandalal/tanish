import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
	email: { type: String, trim: true, unique: true, index: true },
	side: { type: String, enum: ['tanay', 'isha', 'dev'], index: true },
	role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
