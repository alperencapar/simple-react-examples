import { useState, useEffect } from "react"

const Users = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data))
	}, [])

	return (
		<div>
			<h2>Users</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Users
