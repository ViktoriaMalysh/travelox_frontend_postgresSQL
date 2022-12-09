import { CLEAR_TOURS, LOCALE, REVIEWS, TOP_TOURS, TOUR, TOURS } from "../types";

const initialState = {
	tours: [],
	tour: {},
	topTours: [],
	locale: [],
	reviews: [],
};

export const reducerApi = (state = initialState, action) => {
	switch (action.type) {
		case TOURS:
			return { ...state, tours: action.payload };
		case TOUR:
			return { ...state, tour: action.payload };
		case TOP_TOURS:
			return { ...state, topTours: action.payload };
		case LOCALE:
			return { ...state, locale: action.payload };
		case REVIEWS:
			return { ...state, reviews: action.payload };

		case CLEAR_TOURS:
			return initialState;

		default:
			return state;
	}
};
