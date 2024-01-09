import { useApi } from "../hooks/useApi";




const ProductsService = () => {
	const { result, error, loading, requestApi } = useApi();

	const getProducts = () => {
		return requestApi({ method: "get", url: "/products.json" })			
	}



	return {
		getProducts
	}
}

export default ProductsService;