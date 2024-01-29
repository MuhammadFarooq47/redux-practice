import axios from "axios";
import {POST, GET} from "../../apis/requests";
import { toast } from "react-toastify";
import ActionTypes from "../actionTypes/actionTypes";
import Cookies from "js-cookie";

const REGISTER =  (credentials, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            const response = await POST('users/signup', credentials);
            toast.success("Register Successfull");
            navigate("/Login")
            dispatch({
                type : ActionTypes.SIGNUP,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Register Error!");
            console.log(error);
        }
    }

};


const LOGIN = (credentials, navigate) => {
    console.log("🚀 ~ LOGIN ~ credentials:", credentials)
    return async (dispatch) => {
        try {
            const response = await POST('users/login', credentials);
            Cookies.set('token', response?.data?.token)
            console.log("🚀 ~ return ~ response:", response)
            toast.success("Login Successfull...");
            navigate('/');
            dispatch({
                type: ActionTypes.LOGIN,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Login Error!")
            console.log(error);
        }
    }
}

const LOGOUT = (navigate) => {
   return (dispatch) => {
    try {
        localStorage.removeItem("persist:root");
        toast.success("User Logout Successfully...");
        navigate("/login");
        dispatch({
            type: ActionTypes.LOGOUT,
            payload: "User Logout Please Login again!"
        })
       } catch (error) {
        toast.error("Logout Error!");
       }
   }
}

export {REGISTER, LOGIN, LOGOUT}