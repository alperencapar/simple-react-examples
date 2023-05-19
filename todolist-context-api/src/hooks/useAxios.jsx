import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = (config) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	const controller = new AbortController()
	config.signal = controller.signal

	async function apiRequest(config) {
		try {
			setLoading(() => true)
			const response = await axios(config)
			setData(() => response.data)
			setLoading(() => false)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		apiRequest(config)
		if (!loading) return () => controller.abort()
	}, [])

	// useEffect(() => {
	// 	console.log(index)
	// 	setIndex((index) => index + 1)

	// 	setLoading(true)
	// 	axios(config)
	// 		.then((res) => {
	// 			setData(res.data)
	// 		})
	// 		.catch((err) => {
	// 			setError(err)
	// 		})
	// 		.finally(() => setLoading(false))
	// 	return () => {}
	// }, [])

	return { loading, error, data }
}

export default useAxios
