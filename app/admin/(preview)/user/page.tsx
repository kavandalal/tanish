export default function AdminDashboard() {
	return (
		<div className='grid gap-4 '>
			<b>Admin Users</b>
			<div>On this page you can view/delete/download posts</div>
			<div>Each user will have :</div>
			<ul>
				<li>from which side they are</li>
				<li>First Name, Second Name</li>
				<li>Email/Phone Number</li>
				<li>time of the first time arrival on website</li>
			</ul>
				<div>You can navigate to their profile to see which photos they have upload</div>
		</div>
	);
}
