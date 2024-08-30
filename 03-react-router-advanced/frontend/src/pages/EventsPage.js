import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Bill Burr',
		description: 'Bill Burr live from the Bergen Pac.'
	},
	{
		id: 'e2',
		title: 'Dave Chappelle',
		description: 'Dave Chappelle live from MSG.'
	},
	{
		id: 'e3',
		title: 'Mark Norman',
		description: 'Mark Norman live from the NYCC.'
	},
];

function EventsPage() {
	return (
		<>
		<h1>Events Page</h1>
		<ul>
			{DUMMY_EVENTS.map((event) => (
				<li key={event.id}><Link to={event.id}>{event.title}</Link></li>
			))}
		</ul>
		</>

	);
}

export default EventsPage;