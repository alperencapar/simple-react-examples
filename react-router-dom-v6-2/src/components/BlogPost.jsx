import { Link, useNavigate, useParams } from "react-router-dom"
import { blogs } from "../mockdata/blogs.json"

const BlogPost = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const article = blogs.find((blog) => blog.id == id)

	return (
		<>
			<Link to={navigate("/blog")}>Geri Dön</Link>
			<article>
				{article && (
					<>
						<h2>{article.title}</h2>
						<p>{article.content}</p>
					</>
				)}
			</article>
		</>
	)
}

// BlogPost.propTypes = {
// 	title: PropTypes.number,
// }

export default BlogPost
