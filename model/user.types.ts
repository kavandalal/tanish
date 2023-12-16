export default interface user {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	email: string;
	phone?: string;
	side: string;
	role: string;
	postsRef?: [string];
}
