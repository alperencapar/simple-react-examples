import { Link } from "react-router-dom"
import { blogs } from "../mockdata/blogs.json"

const BlogList = () => {
	return (
		<div>
			<h2>Blog Listesi</h2>
			<ul>
				{blogs.length > 0 &&
					blogs.map((blog) => (
						<li key={blog.id}>
							<Link to={`/blog/${blog.id}`}> {blog.title} </Link>
						</li>
					))}
				<li></li>
			</ul>
		</div>
	)
}

export default BlogList
