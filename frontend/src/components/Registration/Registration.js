import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <>
     <div className="container5">
                <div className="title">Registration</div>
                <form action="#">
                    <div className="user__details">
                        <div className="input__box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="E.g: John Smith" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="johnWC98" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Email</span>
                            <input type="email" placeholder="johnsmith@hotmail.com" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Phone Number</span>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="********" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Confirm Password</span>
                            <input type="password" placeholder="********" required />
                        </div>

                    </div>
                    <div className="gender__details">
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
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
    </>
  )
}

export default Registration;

