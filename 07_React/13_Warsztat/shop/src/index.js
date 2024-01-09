import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartProvider from "./contexts/CartContext";
import { NotificationProvider } from "./contexts/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NotificationProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</NotificationProvider>
	</React.StrictMode>
);
