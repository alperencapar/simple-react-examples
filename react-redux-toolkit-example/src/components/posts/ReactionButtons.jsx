import { useDispatch } from "react-redux"
import { reactionAdd } from "../../features/posts/postsSlice"
import propTypes from "prop-types"

const reactionEmojis = {
	thumbsUp: "👍",
	wow: "😮",
	heart: "❤️",
	rocket: "🚀",
	coffee: "☕",
}

// reactions: {
// 	hooray: 0,
// },

const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch()

	const reactionButtons = Object.entries(reactionEmojis).map(
		([name, emoji]) => {
			return (
				<button
					key={name}
					type="button"
					className="reactionButton"
					onClick={() =>
						dispatch(
							reactionAdd({ postId: post.id, reaction: name })
						)
					}
				>
					{emoji} {post.reactions[name]}
				</button>
			)
		}
	)

	return <div>{reactionButtons}</div>
}

ReactionButtons.propTypes = {
	post: propTypes.object,
}
export default ReactionButtons
