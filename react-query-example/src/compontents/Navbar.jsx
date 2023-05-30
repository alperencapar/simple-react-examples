import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header>
			<NavLink to={"/posts"}>Posts</NavLink>
			<NavLink to={"/todos"}>Todos</NavLink>
		</header>
	)
}

export default Navbar
