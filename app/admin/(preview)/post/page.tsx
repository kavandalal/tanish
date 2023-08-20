export default function AdminDashboard() {
	return (
		<div className='grid gap-4 '>
			<b>Admin Posts</b>
			<div>On this page you can view/delete/download posts</div>
			<div>Each post will have :</div>
			<ul>
				<li>photo</li>
				<li>the name of the person who uploaded it</li>
				<li>list of the people who liked/commented</li>
				<li>timestamp</li>
			</ul>
		</div>
	);
}
