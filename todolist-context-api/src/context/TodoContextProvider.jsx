import { createContext, useState } from "react"

const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([])

	function handleDelete(id) {
		setTodos((currTodos) => {
			return currTodos.filter((todo) => todo.id !== id)
		})
	}

	function handleCheck(id, checked) {
		setTodos((currTodos) => {
			return currTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, checked }
				}

				return todo
			})
		})
	}

	const value = {
		todos,
		setTodos,
		handleDelete,
		handleCheck,
	}

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoContext
