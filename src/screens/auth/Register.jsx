import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { REGISTER } from '../../redux/actions/authentication';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirm: "",
        role: "user",
      });
    //   console.log(user, "user//...")
    const dispatch = useDispatch();
    const navigate = useNavigate();

      const onChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
    
      const onsubmit = async (e) => {
        e.preventDefault();
        if (user?.password.length < 6 || user?.password !== user?.confirm) {
            toast.error("Password must be at least 6 characters or match the confirmation.")
            return; // Add this to prevent further execution if there's an error
        }
        try {
           await dispatch(REGISTER(user, navigate
            )) 
        } catch (error) {
           toast.error("Register component error...") 
        }
      }
    
    return (
        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={onsubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={onChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={onChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={onChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={onChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={onChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                value={user.confirm}
                onChange={onChange}
              />
            </div>
    
            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default Register