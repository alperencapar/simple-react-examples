import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

import propTypes from "prop-types"

const PostItem = ({ post }) => {
	const articleStyle = {
		border: "1px solid rgba(127,72,170, 0.85)",
		padding: "0.5rem 1.2rem",
		gap: ".4rem",
	}

	return (
		<article style={articleStyle} data-id={post.id}>
			<h4>{post.title}</h4>
			<p>{post.body.substring(0, 100)}</p>
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
	)
}

PostItem.propTypes = {
	post: propTypes.object,
	// post: {
	// 	id: propTypes.string,
	// 	title: propTypes.string,
	// 	body: propTypes.string,
	// 	date: propTypes.string,
	// 	userId: propTypes.string,
	// },
}

export default PostItem
