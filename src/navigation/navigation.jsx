import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";


const Navigation = () => {
return(
    <Routes>
        <Route path="/" element={
            <Suspense>
                <Home />
            </Suspense>
        } />

        {/* User routes*/}
        <Route path="/register" element={
            <Suspense>
                <Register />
            </Suspense>
        } />
        <Route path="/login" element={
            <Suspense>
                <Login />
            </Suspense>
        } />
    </Routes>
)
}

export default Navigation;