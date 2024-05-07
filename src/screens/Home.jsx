import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LOGOUT } from '../redux/actions/authentication';
import { GET_FEATURED_PRODUCTS } from '../redux/actions/products';

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
  };

  useEffect(() => {
    dispatch(GET_FEATURED_PRODUCTS())
  }, []);
  
  return (
    <>
    <button onClick={() => logOut()} style={{color: '#000'}}> 
    <FaArrowRightToBracket color='#000' />
    Logout
    </button>
    <h1>Home</h1>
    {user? (
      <h2> {`${user?.firstName} ${user?.lastName}`} </h2>
 ):  <h2> No User Found! </h2>
  }
    <Link to={"/login"}>Goto Login</Link>
    </>

  )
}

export default Home