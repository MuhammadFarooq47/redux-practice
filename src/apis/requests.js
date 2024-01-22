import axios from "axios";
import { BASE_URL } from "./apiUrl";

// POST REQUEST
const POST = async (path, data) => {
    const headers = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    };

    try {
        const response = await axios.post(BASE_URL + path, data, headers);
        return response?.data;
    } catch (error) {
        console.error("POST request error:", error);
        throw error; // Rethrow the error to be caught in the LOGIN action
    }
};



// GET REQUEST
const GET = async (path, data) => {
const HEADER = {
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`, 
    }
};
let response = await axios.get(BASE_URL + path + data + HEADER)
    return response?.data
};


// PATCH REQUEST
const PATCH = async (path, data) => {
    const HEADER = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,   
        }
    };

    let respnse = await axios.patch(BASE_URL + path + data);
    return respnse?.data
};

// DELETE REQUEST
const DELETE = async (path, data) => {
    const HEADER = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`, 
        }
    };
    let response = await axios.delete(BASE_URL + path + data + HEADER)
    return response?.data
};


export {POST, GET, PATCH, DELETE};

