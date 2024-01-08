import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();



const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
	<CartContext.Provider value={{ products: cartProducts, setCartProducts }}>
	  {children}
	</CartContext.Provider>
  )
}


export default CartProvider;