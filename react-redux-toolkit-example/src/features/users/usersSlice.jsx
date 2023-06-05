import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
	{
		id: nanoid(),
		name: "AlperenC",
	},
	{
		id: nanoid(),
		name: "Demo Ranch",
	},
	{
		id: nanoid(),
		name: "TalkingB",
	},
]

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
