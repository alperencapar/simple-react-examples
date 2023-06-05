import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import { sub } from "date-fns"
import axios from "axios"

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
	posts: [],
	status: "idle", //idle | loading | succeeded | failed
	error: null,
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(POSTS_URL)
	return response.data
})

export const addNewPost = createAsyncThunk(
	"posts/addNewPost",
	async (initialPost) => {
		const response = await axios.post(POSTS_URL, initialPost)
		return response.data
	}
)

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				// ...spread
				// normally must be mutating state but ember.js creates new state behind the stage. Note: it's only going to work inside the createSlice
				state.posts.push(action.payload)
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
			const existingPost = state.posts.find((post) => post.id === postId)

			//if post found
			if (existingPost) {
				//update the reaction number by sent reaction
				// p.s. not mutating beacause this reducer is inside the createSlice
				existingPost.reactions[reaction]++
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading"
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded"

				let min = 1
				//slice added beacause there was too much posts returning from api
				const loadedPosts = action.payload.slice(0, 10).map((post) => {
					post.date = sub(new Date(), {
						minutes: min++,
					}).toISOString()
					post.reactions = {
						thumbsUp: 0,
						wow: 0,
						heart: 0,
						rocket: 0,
						coffee: 0,
					}
					return post
				})

				state.posts = loadedPosts
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				action.payload.userId = Number(action.payload.userId)
				action.payload.date = new Date().toISOString()
				action.payload.reactions = {
					thumbsUp: 0,
					wow: 0,
					heart: 0,
					rocket: 0,
					coffee: 0,
				}
				state.posts = [...state.posts, action.payload]
			})
	},
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export const { postAdded, reactionAdd } = postsSlice.actions

export default postsSlice.reducer
