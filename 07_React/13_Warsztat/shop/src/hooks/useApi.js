import { useCallback, useState } from "react";
import axios from "axios";
import useNotfication from "./useNotification";

export const useApi = () => {
	const axiosInstance = axios.create();

	const { setLoader, setError } = useNotfication();

	const requestApi = async ({ method, url, data }) => {
		setLoader(true);

		try {
			const res = await axios({ method: method, url: url, data });

			const json = await res.data.products;
			return json;
		} catch (e) {
			console.log("e", e);
			setError(e);
		} finally {
			setTimeout(() => setLoader(false), 500);
		}
	};

	return { requestApi };
};

export default useApi;
