import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<h1>Blog Uygulaması</h1>
			<nav>
				<ul>
					<NavLink
						to="/"
						style={({ isActive }) => {
							return isActive ? { color: "red" } : {}
						}}
					>
						Ana Sayfa
					</NavLink>
					<NavLink
						to="/blog"
						style={({ isActive }) => {
							return isActive ? { color: "red" } : {}
						}}
					>
						Blog
					</NavLink>
				</ul>
			</nav>
		</header>
	)
}

export default Header
