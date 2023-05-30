import Navbar from "./compontents/Navbar"
import { Route, Routes } from "react-router-dom"

import "./App.css"
import Todos from "./compontents/Todos"
import Posts from "./compontents/Posts"
import Post from "./compontents/Post"

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="" element={<Todos />} />
				<Route path="posts">
					<Route index element={<Posts />} />
					<Route path=":id" element={<Post />} />
				</Route>
				<Route path="todos" element={<Todos />} />
			</Routes>
		</>
	)
}

export default App
