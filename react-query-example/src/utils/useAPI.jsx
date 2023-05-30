import axios from "axios"

const placeholdersApi = axios.create({
	baseURL: "http://localhost:3001",
})

export const getData = async (url) => {
	const response = await placeholdersApi.get(url)
	return response.data
}

export const addData = async ({ url, data }) => {
	const response = await placeholdersApi.post(url, data)
	return response.data
}

export const updateData = async ({ url, data }) => {
	return await placeholdersApi.put(url, data)
}

export const deleteData = async (url) => {
	return await placeholdersApi.delete(url)
}

export default placeholdersApi
