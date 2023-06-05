import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header>
			<NavLink to="/posts/new">Create New Post</NavLink>
			<NavLink to="posts">Posts</NavLink>
			<NavLink to="/">Home Page</NavLink>
		</header>
	)
}

export default Navbar
