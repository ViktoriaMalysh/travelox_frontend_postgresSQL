import axios from "axios";
import { API_URL, BACKEND_URL, X_RapidAPI_Key } from "../../config";
import { TOURS, TOUR, TOP_TOURS, LOCALE, REVIEWS } from "../types";

export const checkout = (detail) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `${BACKEND_URL}reservation/create`,
        detail
      );
      if (result.status === 200) {
        dispatch({ type: LOCALE, payload: result.data.locale });
      }
    } catch (err) {
      console.log("Error", err);
      dispatch(alert("404 status (can not get meta data)"));
    }
  };
};
