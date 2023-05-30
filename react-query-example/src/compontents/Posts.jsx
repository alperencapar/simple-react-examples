import { useEffect, useState } from "react"
import { getData, addData, deleteData } from "../utils/useAPI"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { Link } from "react-router-dom"

const Posts = () => {
	const queryClient = useQueryClient()

	const {
		isLoading,
		isError,
		error,
		data: posts,
		refetch,
	} = useQuery(["posts"], () => getData("/posts"), {
		select: (data) => data.sort((a, b) => b.id - a.id),
	})

	const [formTitle, setFormTitle] = useState("")
	const [formBody, setFormBody] = useState("")
	const [postId, setPostId] = useState(() => posts && posts[0].id + 1)

	const addDataMutation = useMutation(addData, {
		onSuccess: (data) => {
			//invalidates cache and refetch
			console.log(data)
			queryClient.invalidateQueries(["posts"])
		},
	})

	// const updateDataMutation = useMutation(updateData, {
	// 	onSuccess: () => {
	// 		//invalidates cache and refetch
	// 		queryClient.invalidateQueries(["posts"])
	// 	},
	// })

	const deleteDataMutation = useMutation(deleteData, {
		onSuccess: () => {
			//invalidates cache and refetch
			queryClient.invalidateQueries(["posts"])
		},
	})

	const submitHandler = () => {
		addDataMutation.mutate({
			url: "/posts",
			data: {
				userId: 1,
				id: postId,
				title: formTitle,
				body: formBody,
			},
		})
		setPostId((oldId) => oldId + 1)
	}

	const handleDelete = (id) => {
		deleteDataMutation.mutate(`/posts/${id}`)
	}

	useEffect(() => {}, [])

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
				<p>please standby</p>
			</div>
		)
	}

	if (!isLoading && posts) {
		return (
			<div>
				<div>
					<form
						method="POST"
						onSubmit={(e) => {
							e.preventDefault()
							submitHandler()
						}}
					>
						<div>
							<input
								type="text"
								name="title"
								id="title"
								placeholder="title"
								onChange={(e) => {
									setFormTitle(() => e.target.value)
								}}
							/>
						</div>

						<div>
							<textarea
								name="body"
								id=""
								cols="30"
								rows="10"
								placeholder="body"
								onChange={(e) => {
									setFormBody(() => e.target.value)
								}}
							></textarea>
						</div>

						<div>
							<input type="submit" value="Gönder" />
						</div>
					</form>
				</div>
				<div>
					<h2>Posts</h2>
					<div>
						<input type="button" value="Reload" onClick={refetch} />
					</div>
					<ul>
						{Array.isArray(posts) &&
							posts.map((post) => (
								<li key={post.id} style={{ listStyle: "none" }}>
									<Link to={`/posts/${post.id}`}>
										{post.title}
									</Link>
									<input
										type="button"
										value="❌"
										onClick={() => handleDelete(post.id)}
									/>
								</li>
							))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Posts
