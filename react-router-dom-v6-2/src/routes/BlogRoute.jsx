import { Route, Routes } from "react-router-dom"
import BlogHomePage from "../pages/BlogHomePage"
import BlogPost from "../components/BlogPost"

const BlogRoute = () => {
	return (
		<Routes>
			<Route index element={<BlogHomePage />} />
			<Route path=":id" element={<BlogPost />} />
		</Routes>
	)
}

export default BlogRoute
