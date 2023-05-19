import { useContext } from "react"
import TodoItem from "./TodoItem"
import TodoContext from "../context/TodoContextProvider"

const TodoList = () => {
	const { todos } = useContext(TodoContext)

	return (
		<div>
			<h2>Todos</h2>
			<ul className="todos">
				{todos.length > 0 &&
					todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
			</ul>
		</div>
	)
}

export default TodoList
