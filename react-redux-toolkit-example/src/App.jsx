import { Route, Routes } from "react-router-dom"

import Counter from "./components/Counter"
import PostsList from "./components/posts/PostsList"

import "./App.css"
import AddPostForm from "./components/posts/AddPostForm"
import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="counter" element={<Counter />} />
				<Route path="posts">
					<Route index element={<PostsList />}></Route>
					<Route path="new" element={<AddPostForm />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
