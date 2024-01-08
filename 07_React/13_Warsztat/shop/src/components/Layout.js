import {
	CssBaseline,
	Container,
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
export default function Layout(props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<CssBaseline />
			<AppBar position="static" sx={{ maxWidth: "lg", margin: "auto" }}>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<StorefrontIcon />
					</IconButton>

					<IconButton
						size="medium"
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<ShoppingCartIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg" sx={{ mt: 5 }}>
				<Box sx={{ my: 5 }}>{props.content}</Box>
			</Container>
		</Box>
	);
}
