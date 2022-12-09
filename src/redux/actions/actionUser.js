import axios from "axios";
import { BACKEND_URL } from "../../config";
import { CLEAR_USER, USER } from "../types";

export const signUp = (user) => {
	return async (dispatch) => {
		try {
			const result = await axios.post(`${BACKEND_URL}sign-up`, { user });
			if (result.status < 300) {
				dispatch({ type: USER, payload: result.data.userDetails });
				localStorage.setItem("token", result.data.token);
				localStorage.setItem("isUser", true);
			}
		} catch (err) {
			console.log("Error", err);
			dispatch(alert(`Email ${user.email} already taken`));
		}
	};
};

export const signIn = (user) => {
	return async (dispatch) => {
		try {
			const result = await axios.post(`${BACKEND_URL}sign-in`, { user });
			if (result.status < 300) {
				dispatch({ type: USER, payload: result.data.userDetails });
				localStorage.setItem("token", result.data.token);
				localStorage.setItem("isUser", true);
			}
		} catch (err) {
			console.log("Error", err);
			dispatch(alert(`User ${user.email} not found`));
		}
	};
};

export const verifyToken = (token) => {
	return async (dispatch) => {
		try {
			const result = await axios.post(
				`${BACKEND_URL}verify-token`,
				{},
				{ headers: { authorization: token } }
			);
			if (result.status < 300) {
				dispatch({ type: USER, payload: result.data.userDetails });
				localStorage.setItem("token", result.data.token);
				localStorage.setItem("isUser", true);
			}
		} catch (err) {
			localStorage.removeItem("isUser");
			localStorage.removeItem("token");
			dispatch({ type: CLEAR_USER });
		}     
	};
};
