import { useContext, useState } from "react"
import TodoContext from "../context/TodoContextProvider"

const TodoForm = () => {
	const [newTodo, setNewTodo] = useState("")
	const { setTodos } = useContext(TodoContext)

	function handleSubmit(event, todoObj) {
		event.preventDefault()
		if (newTodo === "") return
		setTodos((currTodos) => {
			return [...currTodos, todoObj]
		})

		setNewTodo(() => "")
	}

	return (
		<form
			action=""
			onSubmit={(event) => {
				handleSubmit(event, {
					id: crypto.randomUUID(),
					text: newTodo,
					checked: false,
				})
			}}
		>
			<div>
				<label htmlFor="">New todo</label>

				<input
					type="text"
					value={newTodo}
					onChange={(event) => {
						setNewTodo(() => {
							return event.target.value
						})
					}}
				/>
			</div>
		</form>
	)
}

export default TodoForm
