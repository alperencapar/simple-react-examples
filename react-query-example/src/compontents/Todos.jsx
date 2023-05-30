import { useMutation, useQuery, useQueryClient } from "react-query"
import { addData, deleteData, getData, updateData } from "../utils/useAPI"
import { useState } from "react"

const Todos = () => {
	const queryClient = useQueryClient()

	const {
		isLoading,
		isError,
		error,
		data: todos,
	} = useQuery(["todos"], () => getData(`/todos`), {
		select: (data) => data.sort((a, b) => b.id - a.id),
	})

	const addTodoMutation = useMutation(addData, {
		onSuccess: () => {
			queryClient.invalidateQueries(["todos"])
		},
	})

	const deleteTodoMutation = useMutation(deleteData, {
		onSuccess: () => {
			queryClient.invalidateQueries(["todos"])
		},
	})

	const updateTodoMutation = useMutation(updateData, {
		onSuccess: () => {
			queryClient.invalidateQueries(["todos"])
		},
	})

	const [title, setTitle] = useState("")

	const handleSubmit = () => {
		const data = {
			userId: 1,
			id: crypto.randomUUID(),
			title: title,
			completed: false,
		}

		addTodoMutation.mutate({ url: "/todos", data: data })
		setTitle(() => "")
	}

	const handleComplete = (status, todo) => {
		console.log(todo)
		updateTodoMutation.mutate({
			url: `/todos/${todo.id}`,
			data: { ...todo, completed: status },
		})
	}

	const handleDelete = (id) => {
		deleteTodoMutation.mutate(`/todos/${id}`)
	}

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

	return (
		<div>
			<h2>Todos</h2>
			<form
				onSubmit={(event) => {
					event.preventDefault()
					handleSubmit()
				}}
			>
				<div>
					<input
						type="text"
						name="title"
						id="title"
						value={title}
						onChange={(e) => setTitle(() => e.target.value)}
					/>
					<button type="submit">✔</button>
				</div>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} style={{ listStyle: "none" }}>
						<div>
							<input
								type="checkbox"
								name="completed"
								id="status"
								// value={todo.completed}
								checked={todo.completed}
								onChange={(event) =>
									handleComplete(event.target.checked, todo)
								}
							/>
							{todo.title}
							<input
								type="button"
								value="❌"
								onClick={() => handleDelete(todo.id)}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
