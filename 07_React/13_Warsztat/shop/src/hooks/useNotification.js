import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NotificationContext } from "../contexts/NotificationContext";

 const useNotfication = () => {
	const context = useContext(NotificationContext);
	if (!context) throw new Error("useNotfication must be used within a NotificationProvider");
	return context;
};

export default useNotfication;