import { useApi } from "../hooks/useApi";


const getProducts = () => {
	const usapi = useApi( { method: "GET", url: "products" } );

	return usapi.result;
}