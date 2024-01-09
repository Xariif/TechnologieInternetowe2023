import {
	CssBaseline,
	Container,
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Typography,
	Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import useCart from "../hooks/useCart";
import useApi from "../hooks/useApi";
import { Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
	const { cartProducts, setCartProducts } = useCart();
	
	const navigate = useNavigate();

	return (
		<>
			
			<Box sx={{ flexGrow: 1 }}>
				<CssBaseline />
				<AppBar position="static" sx={{ maxWidth: "lg", margin: "auto" }}>
					<Toolbar sx={{ justifyContent: "space-between" }}>
					<Box display="flex" alignItems='center' >
							<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 1 }}
							onClick={ () => navigate("/")}
						>
							<StorefrontIcon />
						</IconButton>
				<Typography fontWeight='bold'>
					Sklep
				</Typography>
					</Box>
						<IconButton
							size="medium"
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={ () => navigate("/summary")}
						>
							<Badge badgeContent={cartProducts.length} color="warning">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Container maxWidth="lg" sx={{ mt: 5 }}>
					<Box sx={{ my: 5 }}>{props.content}</Box>
				</Container>
			</Box>
		</>
	);
}
