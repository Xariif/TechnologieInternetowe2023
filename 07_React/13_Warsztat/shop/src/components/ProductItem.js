import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useCart from "../hooks/useCart";

const ProductItem = ({ product }) => {
	const { cartProducts, handleAddItem, handleRemoveItem   } = useCart();

	
	return (
		<Card style={{ margin: "auto" }}>
			<Card.Img
				variant="top"
				src={product.thumb}
				style={{ height: "200px", width: "100%", objectFit: "contain" }}
			/>
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				{product.sale_price != 0 ? (
					<Card.Text>
						<span style={{ textDecoration: "line-through" }}>
							{product.price} zł
						</span>{" "}
						{product.sale_price} zł
					</Card.Text>
				) : (
					<Card.Text>{product.price} zł</Card.Text>
				)}
				<Button variant="primary" onClick={()=>handleAddItem(product)}>
					Dodaj do koszyka
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductItem;
