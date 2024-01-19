import axios from "axios";
import {POST, GET} from "../../apis/requests";
import { toast } from "react-toastify";
import ActionTypes from "../actionTypes/actionTypes";

const Signup =  (credentials, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            const response = await POST('/users/signup', credentials);
            toast.success("Register Successfull");
            navigate("/Login")
            dispatch({
                type : ActionTypes.SIGNUP,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Errro from Register");
            console.log(error);
        }
    }

};


const Login = (credentials, navigate) => {
    return async (dispatch) => {
        try {
            const response = await POST('/users/login', credentials);
            toast.success("Login Successfull...");
            navigate('/');
            dispatch({
                type: ActionTypes.LOGIN,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Error from login!")
            console.log(error);
        }
    }
}