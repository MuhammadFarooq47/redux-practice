import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LOGOUT } from '../redux/actions/authentication';

function Home() {
  const {user} = useSelector((state) => state.authReducer);
  const token = Cookies.get("token")
  const dispatch = useDispatch()
  const navigate = useNavigate();
  if (user?.firstName === undefined) {
    navigate("/login")
  }

  const logOut = () => {
    dispatch(LOGOUT(navigate));
    Cookies.remove('token')
  }
  
  return (
    <>
    <button onClick={() => logOut()}> 
    <FaArrowRightToBracket />
    </button>
    <h1>Home</h1>
    <h2> {`${user?.firstName} ${user?.lastName}`} </h2>
    <Link to={"/login"}>Goto Login</Link>
    </>

  )
}

export default Home