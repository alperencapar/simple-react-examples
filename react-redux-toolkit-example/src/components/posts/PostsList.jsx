import { useSelector } from "react-redux"
import { selectAllPosts } from "../../features/posts/postsSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsList = () => {
	const posts = useSelector(selectAllPosts)
	// const test = useSelector((state) => state)

	const sectionStyle = { display: "grid", gap: "1rem" }
	const articleStyle = {
		border: "1px solid rgba(127,72,170, 0.85)",
		padding: "0.5rem 1.2rem",
		gap: ".4rem",
	}

	const orderPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date))

	const renderedPosts = orderPosts.map((post) => (
		<article key={post.id} style={articleStyle}>
			<h4>{post.title}</h4>
			<p>{post.content.substring(0, 100)}</p>
			<div>
				<span>
					<small>
						<TimeAgo timestamp={post.date} />
					</small>
					<small>
						<PostAuthor userId={post.userId} />
					</small>
				</span>
			</div>
			<ReactionButtons post={post} />
		</article>
	))

	return (
		<section style={sectionStyle}>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	)
}

export default PostsList
