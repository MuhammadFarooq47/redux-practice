import { GET } from "../../apis/requests";
import axios from "axios";
import ActionTypes from "../actionTypes/actionTypes";



const GET_FEATURED_PRODUCTS = () => {
  return async (dispatch) => {
    try {
      const response = await GET("products/featured");
      console.log("🚀 ~ return ~ response:", response)
      dispatch({
        type: ActionTypes.GET_FEATURED_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log("GET_FEATURED_PRODUCTS error", error.message);
    }
  };
};



export { GET_FEATURED_PRODUCTS };