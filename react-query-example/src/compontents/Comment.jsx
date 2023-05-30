import { getData } from "../utils/useAPI"
import { useQuery } from "react-query"
import propTypes from "prop-types"

const Comment = ({ id }) => {
	const { isLoading, data: comments } = useQuery(
		["comments", id],
		async () => {
			const allComments = await getData(`/comments`)
			return allComments.filter((comment) => comment.postId == id)
		}
	)

	if (isLoading) {
		return (
			<div>
				<p>comments Loading please wait</p>
			</div>
		)
	}

	return (
		<div>
			<h2>Comments</h2>
			<ul>
				{comments &&
					comments.map((comment) => (
						<li key={comment.id}>{comment.body}</li>
					))}
			</ul>
		</div>
	)
}

Comment.propTypes = {
	id: propTypes.number,
}

export default Comment
