export default function Feed() {
	return (
		<div className='grid gap-4 '>
			<b>Feed</b>
			<div>This page will have : </div>
			<ul>
				<li>filter to see all the events</li>
				<li>filter of newest/top liked photos in Ascending/Descending</li>
			</ul>
			<div>
				Each post will have download, like, comment, the name of the person who uploaded the photo, the person can write
				caption while uploading the photo, timestamp
			</div>
		</div>
	);
}
