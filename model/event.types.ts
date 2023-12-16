export default interface event {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	start: Date | null;
	end: Date | null;
	venue: string;
	address: string;
	description: string;
	map: string;
	isPrivate: Boolean;
}
