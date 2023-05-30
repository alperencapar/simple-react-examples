import { useQuery } from "react-query"
import { getData } from "../utils/useAPI"
import { useParams } from "react-router-dom"
import Comment from "./Comment"

const Post = () => {
	const { id } = useParams()

	const {
		isLoading,
		isError,
		error,
		data: post,
		refetch,
	} = useQuery(["post", id], () => getData(`/posts/${id}`))

	if (isError) {
		return (
			<div>
				<h2>ERROR</h2>
				<p>{error}</p>
			</div>
		)
	}

	if (isLoading) {
		return (
			<div>
				Loading...
				<p>Please standby</p>
			</div>
		)
	}

	if (post) {
		return (
			<div>
				<h2>
					Post{" "}
					<input type="button" value="Refresh" onClick={refetch} />
				</h2>

				<p>{post.title}</p>
				<p>{post.body}</p>

				<div>
					<Comment id={id} />
				</div>
			</div>
		)
	}
}

export default Post
