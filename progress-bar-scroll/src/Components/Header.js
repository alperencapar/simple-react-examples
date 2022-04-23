import React from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header-logo">AppLogo</div>
				<nav>
					<div className="nav-element-container">
						<a href="/">About</a>
					</div>
					<div className="nav-element-container">
						<a href="/">References</a>
					</div>
					<div className="nav-element-container">
						<a href="/">Contact</a>
					</div>
				</nav>
			</div>
			<ScrollProgressBar />
		</header>
	);
};

export default Header;
