import { useState } from "react"

const BlogForm = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		// Blog gönderme işlemleri
		console.log("Blog gönderildi:", { title, content })
		setTitle("")
		setContent("")
	}

	return (
		<div>
			<h2>Blog Formu</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Başlık:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="content">İçerik:</label>
				<textarea
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>

				<button type="submit">Gönder</button>
			</form>
		</div>
	)
}

export default BlogForm
