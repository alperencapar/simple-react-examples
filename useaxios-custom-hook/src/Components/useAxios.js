import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (config) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
        setLoading(true)
		axios(config)
			.then((res) => {
                setData(res.data)
            })
			.catch((err) => {
                setError(err)
            })
            .finally(() => setLoading(false))
            return () => {}
	}, []);

    return { data, error, loading }
};

export default useAxios;
