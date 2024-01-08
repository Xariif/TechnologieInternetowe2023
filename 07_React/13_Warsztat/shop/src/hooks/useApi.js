import { useCallback, useState } from "react";
import axios from "axios";

export const useApi = () => {
	const axiosInstance = axios.create();

	const [result, setResult] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const requestApi = useCallback(async () => {
		setLoading(true);
		try {
			const res = await axios.request({ method, url, data });
			const json = await res.json();
			setResult(json);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}, [method, url, data]);

	return { result, error, loading, requestApi };
};

export default useApi;