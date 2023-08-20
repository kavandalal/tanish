export default function AdminDashboard() {
	return (
		<div className='grid gap-4 '>
			<b>Admin Events</b>
			<div>On this page you can add/edit/delete events details</div>
			<div>Each event will have :</div>
			<ul>
				<li>start time</li>
				<li>location(which will take them to google maps)</li>
				<li>details about the event</li>
			</ul>
		</div>
	);
}
