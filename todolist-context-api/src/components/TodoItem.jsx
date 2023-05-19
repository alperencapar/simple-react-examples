import { useContext } from "react"
import TodoContext from "../context/TodoContextProvider"

const TodoItem = ({ todo }) => {
	const { handleDelete, handleCheck } = useContext(TodoContext)

	return (
		<li style={{ listStyle: "none" }}>
			<div className="todo-content">{todo.text}</div>
			<div className="action-btns">
				<input
					type="button"
					value="❌"
					onClick={(e) => {
						e.preventDefault()
						handleDelete(todo.id)
					}}
				/>
				<input
					type="button"
					value="🔁"
					onClick={(e) => {
						e.preventDefault()
						handleCheck(todo.id, !todo.checked)
					}}
				/>
			</div>
		</li>
	)
}

export default TodoItem
