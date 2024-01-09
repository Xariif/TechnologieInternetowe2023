import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCallback } from "react";
import useCart from "../hooks/useCart";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Summary = () => {
	const params = useParams();

	const { cartProducts, handleRemoveItem } = useCart();

	const salePriceView = (price, sale_price) => {
		return (
			<>
				{sale_price > 0 ? (
					<>
						<span style={{ textDecoration: "line-through" }}>{price} zł</span>{" "}
						{sale_price} zł
					</>
				) : (
					<span>{price} zł</span>
				)}
			</>
		);
	};

	if (cartProducts.length === 0) {
		return <Typography variant="h4">Koszyk jest pusty, kup coś :) </Typography>;
	}

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Count</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Price per item</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cartProducts.map((row, index) => (
							<TableRow
								key={index}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell>{row.quantity}</TableCell>

								<TableCell>{row.title}</TableCell>
								<TableCell align="right">
									{salePriceView(row.price, row.sale_price)}
								</TableCell>
								<TableCell align="right">
									<Button
										variant="danger"
										onClick={() => handleRemoveItem(row)}
									>
										Remove
									</Button>
								</TableCell>
							</TableRow>
						))}

							<TableRow>
								<TableCell colSpan={2}>Total</TableCell>
								<TableCell align="right">
									{cartProducts.reduce(
										(acc, curr) => acc + curr.quantity * (curr.sale_price > 0 ? curr.sale_price : curr.price),
										0
									)}{" "}
									zł
								</TableCell>
								<TableCell></TableCell>
							</TableRow>


					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default Summary;
