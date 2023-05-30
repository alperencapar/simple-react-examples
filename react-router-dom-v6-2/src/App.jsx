import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlogRoute from "./routes/BlogRoute"

import useTyping from "./hooks/useTyping"

import "./App.css"

function App() {
	const animatedText = useTyping(
		["Welcome!", "This is a typing hook!", "Enjoy."],
		125,
		50
	)
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="blog/*" element={<BlogRoute />}></Route>
			</Routes>
			<div style={{ height: "30px" }}>{animatedText}</div>
		</>
	)
}

export default App
