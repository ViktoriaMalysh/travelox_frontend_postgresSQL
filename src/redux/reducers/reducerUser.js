import { CLEAR_USER, USER } from "../types";

const initialState = {
	user: {},
};

export const reducerUser = (state = initialState, action) => {
	switch (action.type) {
		case USER:
			return { ...state, user: action.payload };

		case CLEAR_USER:
			return initialState;

		default:
			return state;
	}
};
