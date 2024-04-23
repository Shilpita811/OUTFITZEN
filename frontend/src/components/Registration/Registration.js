import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Registration.css';
import { useAlert } from 'react-alert';
// import { useDispatch, useSelector } from 'react-redux';
// import {register, clearError} from '../../action/Useraction';
import axios from "axios";

const Registration = () => {
    const alert=useAlert();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const { name, email, phone, password } = formData;

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
            const response = await axios.post('/api/user/register', formData);
            // Assuming the response contains the registered user data
            // onRegister(response.data);
            alert.success('Register Successfull');
            navigate('/')
        } catch (error) {
            console.error('Registration Error:', error.message);
            // Handle error here, such as displaying an error message to the user
        }
    };
  return (
    <div className="container5">
                <div className="title">Registration</div>
                <form  onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="user__details">
                        <div className="input__box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="E.g: John Smith"  name="name" value={name} onChange={handleInputChange}/>
                        </div>
                        {/* <div className="input__box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="johnWC98" required />
                        </div> */}
                        <div className="input__box">
                            <span className="details">Email</span>
                            <input type="email" placeholder="johnsmith@hotmail.com"   name="email" value={email} onChange={handleInputChange} />
                        </div>
                        <div className="input__box">
                            <span className="details">Phone Number</span>
                            <input type="number"  placeholder="012-345-6789"  name="phone" value={phone} onChange={handleInputChange} />
                        </div>
                        <div className="input__box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="********"  name="password" value={password} onChange={handleInputChange} />
                        </div>
                        {/* <div className="input__box">
                            <span className="details">Confirm Password</span>
                            <input type="password" placeholder="********" required />
                        </div> */}

                    </div>
                    {/* <div className="gender__details">
                        <input type="radio" name="gender" id="dot-1" />
                        <input type="radio" name="gender" id="dot-2" />
                        <input type="radio" name="gender" id="dot-3" />
                        <span className="gender__title">Gender</span>
                        <div className="category">
                            <label for="dot-1">
                                <span className="dot one"></span>
                                <span>Male</span>
                            </label>
                            <label for="dot-2">
                                <span className="dot two"></span>
                                <span>Female</span>
                            </label>
                            <label for="dot-3">
                                <span className="dot three"></span>
                                <span>Prefer not to say</span>
                            </label>
                        </div>
                    </div> */}
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
  )
}

export default Registration;

