import React from "react"
import useAxios from "../hooks/useAxios"

const PostList = () => {
	const { data } = useAxios({
		url: "https://jsonplaceholder.typicode.com/posts/",
	})

	return (
		<>
			<h2>Posts</h2>
			{data &&
				data.map((row) => (
					<li key={row.id} style={{ listStyle: "none" }}>
						{row.title}
					</li>
				))}
		</>
	)
}

export default PostList
