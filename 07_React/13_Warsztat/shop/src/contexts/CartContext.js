import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const handleAddItem = (product) => {
	

		const itemExist = cartProducts.find((item) => item.title === product.title);


		if (itemExist) {
			const newCartProducts = cartProducts.map((item) =>
				item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
			);

			setCartProducts(newCartProducts);
		} else {
			setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveItem = (product) => {
		if (product.quantity === 1) {
			const newCartProducts = cartProducts.filter(
				(item) => item.title !== product.title
			);

			setCartProducts(newCartProducts);
		}
		if (product.quantity > 1) {
			const newCartProducts = cartProducts.map((item) =>
				item.title === product.title ? { ...item, quantity: item.quantity - 1 } : item
			);

			setCartProducts(newCartProducts);
		}
	};

	return (
		<CartContext.Provider
			value={{ cartProducts, handleAddItem, handleRemoveItem }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
