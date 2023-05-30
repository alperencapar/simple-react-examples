import { Link, useNavigate, useParams } from "react-router-dom"
import { blogs } from "../mockdata/blogs.json"
import { useEffect, useState } from "react"

const BlogPost = () => {
	const [isRedirect, setIsRedirect] = useState(false)

	const { id } = useParams()
	const navigate = useNavigate()

	const article = blogs.find((blog) => blog.id == id)

	useEffect(() => {
		if (isRedirect) navigate("/blog")
	}, [isRedirect, navigate])

	return (
		<>
			<Link to="" onClick={() => setIsRedirect(() => true)}>
				Geri Dön
			</Link>
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
