import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
	selectAllPosts,
	getPostsStatus,
	getPostsError,
	fetchPosts,
} from "../../features/posts/postsSlice"
import PostItem from "./PostItem"

const PostsList = () => {
	const dispatch = useDispatch()

	const posts = useSelector(selectAllPosts)
	const postsStatus = useSelector(getPostsStatus)
	const error = useSelector(getPostsError)

	const sectionStyle = { display: "grid", gap: "1rem" }

	useEffect(() => {
		if (postsStatus === "idle") dispatch(fetchPosts())
	}, [postsStatus, dispatch])

	let content

	switch (postsStatus) {
		case "loading":
			content = <p>Posts are loading, please wait</p>
			break
		case "failed":
			content = <p>{error}</p>
			break
		default:
			break
	}

	if (postsStatus === "succeeded") {
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date))

		content = orderedPosts.map((post) => (
			<PostItem key={post.id} post={post} />
		))
	}

	return (
		<section style={sectionStyle}>
			<h2>Posts</h2>
			{content}
		</section>
	)
}

export default PostsList
