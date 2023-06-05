import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import { store } from "./store/store.jsx"
import { Provider } from "react-redux"
import { fetchUsers } from "./features/users/usersSlice.jsx"

import { BrowserRouter } from "react-router-dom"

import "./index.css"

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
