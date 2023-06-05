import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewPost } from "../../features/posts/postsSlice"
import { selectAllUsers } from "../../features/users/usersSlice"

const AddPostForm = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const [userId, setUserId] = useState("")

	const dispatch = useDispatch()
	const users = useSelector(selectAllUsers)

	const onTitleChange = (e) => setTitle(e.target.value)
	const onContentChange = (e) => setContent(e.target.value)
	const onAuthorChange = (e) => setUserId(e.target.value)

	const navigate = useNavigate()

	const onPostFormSubmit = () => {
		if (title && content) {
			dispatch(
				addNewPost({
					title: title,
					body: content,
					userId: userId,
				})
			)
			setTitle("")
			setContent("")

			navigate("/posts")
		}
	}

	const divStyle = {
		display: "grid",
		textAlign: "start",
		gap: ".5rem",
	}

	const userOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	))

	const okToSave = Boolean(title) && Boolean(content) && Boolean(userId)

	return (
		<div>
			<h2>Add Post:</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					onPostFormSubmit()
				}}
			>
				<div style={divStyle}>
					<label htmlFor="postTitle">Post Title:</label>
					<input
						type="text"
						name="postTitle"
						id="postTitle"
						value={title}
						onChange={onTitleChange}
					/>
				</div>

				<div style={divStyle}>
					<label htmlFor="postContent">Post Content:</label>
					<textarea
						name="postContent"
						id="postContent"
						onChange={onContentChange}
					></textarea>
				</div>

				<div style={{ display: "grid" }}>
					<label htmlFor="postAuthor">Author of Post:</label>
					<select
						name="postAuthor"
						value={userId}
						onChange={onAuthorChange}
					>
						<option value=""></option>
						{userOptions}
					</select>
				</div>

				<div>
					<button type="submit" disabled={!okToSave}>
						Save Post
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddPostForm
