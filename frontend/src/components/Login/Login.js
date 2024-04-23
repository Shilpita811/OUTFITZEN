import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import axios from "axios";

const Login = () => {
  const alert=useAlert();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const {email, password } = formData;

    const handleInputChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Call the onRegister function passed from the parent component
        const response = await axios.post('/api/user/login', formData);
        // Assuming the response contains the registered user data
        // onRegister(response.data);
        alert.success('Login Successfull');
        navigate('/')
    } catch (error) {
        console.error('Login Error:', error.message);
        // Handle error here, such as displaying an error message to the user
    }
};
  return (
    <div>
      <div>
        <div className="container8">
          <div className="title">Login</div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="user__details">


              <div className="input__box">
                <span className="details">Email</span>
                <input type="email" placeholder="johnsmith@hotmail.com" name="email" value={email} onChange={handleInputChange} required />
              </div>

              <div className="input__box">
                <span className="details">Password</span>
                <input type="password" placeholder="" name="password" value={password} onChange={handleInputChange} required />
              </div>


            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login