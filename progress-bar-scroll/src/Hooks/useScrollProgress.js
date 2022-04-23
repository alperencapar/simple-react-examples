import { useEffect, useState } from "react";

const useScrollProgress = () => {
	const [scrollPercent, setScrollPercent] = useState(0);

	const onScroll = () => {
		const winScroll = window.scrollY; //how much scrolled in page
		const height = document.body.scrollHeight - window.innerHeight; //total page height - user height
		const scrolled = Number((winScroll / height).toFixed(2)) * 100;

		setScrollPercent(scrolled);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return { scrollPercent };
};

export default useScrollProgress;
