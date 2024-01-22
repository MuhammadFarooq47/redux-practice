import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Home() {
  const {user} = useSelector((state) => state.authReducer);
  // console.log("🚀 ~ Home ~ user:", user)
  const token = Cookies.get("token")
  console.log("🚀 ~ Home ~ token:", token)
  const navigate = useNavigate();
  if (user?.firstName === undefined) {
    navigate("/login")
  }
  
  return (
    <>
    <h1>Home</h1>
    <h2> {`${user?.firstName} ${user?.lastName}`} </h2>
    <Link to={"/login"}>Goto login</Link>
    </>
  )
}

export default Home