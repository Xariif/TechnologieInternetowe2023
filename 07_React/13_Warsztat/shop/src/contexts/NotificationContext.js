import { CompareSharp } from "@mui/icons-material";
import { Alert, Backdrop, CircularProgress, Paper, Snackbar } from "@mui/material";
import {
	createContext,
	useContext,
	useMemo,
	useReducer,
	useState,
} from "react";

const initialState = {
	toast: {
		show: false,
		message: "",
		severity: "success",
	},
	loader: {
		show: false,
	},
};

export const NotificationContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "SHOW_TOAST":
			return {
				...state,
				toast: {
					show: true,
					message: action.payload.message,
					severity: action.payload.severity,
				},
			};
		case "HIDE_TOAST":
			return {
				...state,
				toast: {
					...state.toast,
					show: false,
				},
			};

		case "SET_LOADER":
			return {
				...state,
				loader: {
					show: action.payload.show,
				},
			};
		default:
			console.log("default");
			return state;
	}
};

export function NotificationProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const showToast = (message, severity) => {
		if (state.toast.show) {
			dispatch({
				type: "HIDE_TOAST",
			});
			setTimeout(() => {
				dispatch({
					type: "SHOW_TOAST",
					payload: {
						message,
						severity,
					},
				});
			}, 500);
		} else {
			dispatch({
				type: "SHOW_TOAST",
				payload: {
					message,
					severity,
				},
			});
		}
	};

	const hideToast = () => {
		dispatch({
			type: "HIDE_TOAST",
		});
	};

	const setLoader = (show) => {
		dispatch({
			type: "SET_LOADER",
			payload: {
				show,
			},
		});
	};

	return (
		<NotificationContext.Provider
			value={useMemo(
				() => ({
					showToast,
					hideToast,
					setLoader,
					state,
				}),
				[state, showToast, hideToast, setLoader]
			)}
		>
			<Toast state={state} hideToast={hideToast} />
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={state.loader.show}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			{children}
		</NotificationContext.Provider>
	);
}



function Toast({ state, hideToast }) {
  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      hideToast();
    }
  };

  return (
    <Snackbar
      open={state.toast?.show}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={state.toast?.severity}
        sx={{ width: "100%" }}
      >
        {state.toast?.message}
      </Alert>
    </Snackbar>
  );
}