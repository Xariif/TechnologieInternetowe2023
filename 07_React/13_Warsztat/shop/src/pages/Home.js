import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { useApi } from "../hooks/useApi";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ProductsService from "../services/ProductsService";

const Home = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	const service = ProductsService();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		service.getProducts().then((response) => {
			setProducts(response);
		});
	}, []);







	return (
		<>
		
			{ products && (
				<>
					<Grid container spacing={1}>
						{products.map((product,index) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
								<Item elevation={0} key={product.id}> 
									<ProductItem product={product} />
								</Item>
							</Grid>
						))}
					</Grid>
				</>
			)}
		</>
	);
};

export default Home;


