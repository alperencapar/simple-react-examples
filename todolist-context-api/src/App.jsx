import "./App.css"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoContextProvider } from "./context/TodoContextProvider"
import PostList from "./components/PostList"

function App() {
	return (
		<>
			<TodoContextProvider>
				<TodoForm />
				<TodoList />
			</TodoContextProvider>
			{/* <PostList /> */}
		</>
	)
}

export default App
