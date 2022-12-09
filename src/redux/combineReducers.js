import { combineReducers } from "redux";
import { reducerApi } from "./reducers/reducerApi";
import { reducerUser } from "./reducers/reducerUser";

export const rootReducers = combineReducers({
	api: reducerApi,
	user: reducerUser,
});
