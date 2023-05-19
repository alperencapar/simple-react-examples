import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlogRoute from "./routes/BlogRoute"

import "./App.css"

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="blog/*" element={<BlogRoute />}></Route>
		</Routes>
	)
}

export default App
