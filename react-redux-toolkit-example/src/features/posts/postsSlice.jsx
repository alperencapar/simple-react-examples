import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = [
	{
		id: "1",
		title: "Learning Redux Toolkit",
		content: "I've heard good things.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: "2",
		title: "Slices...",
		content: "The more I say slice, the more I want pizza.",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
]

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				// ...spread
				// normally must be mutating state but ember.js creates new state behind the stage. Note: it's only going to work inside the createSlice
				state.push(action.payload)
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				}
			},
		},

		reactionAdd(state, action) {
			const { postId, reaction } = action.payload

			//find post
			const existingPost = state.find((post) => post.id === postId)

			//if post found
			if (existingPost) {
				//update the reaction number by sent reaction
				// p.s. not mutating beacause this reducer is inside the createSlice
				existingPost.reactions[reaction]++
			}
		},
	},
})

export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdd } = postsSlice.actions

export default postsSlice.reducer
