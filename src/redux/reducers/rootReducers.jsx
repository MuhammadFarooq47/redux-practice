import { combineReducers } from "redux";
import authReducer from "./authentication";
import ProductsReducers from "./products";


const rootReducers = combineReducers({
    authReducer,
    ProductsReducers
});

export default rootReducers;


