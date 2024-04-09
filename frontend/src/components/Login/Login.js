import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
      <div>
        <div className="container">
                <div className="title">Login</div>
                <form action="#">
                    <div className="user__details">
                        
                        
                        <div className="input__box">
                            <span className="details">Email</span>
                            <input type="email" placeholder="johnsmith@hotmail.com" required />
                        </div>
                        
                        <div className="input__box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="********" required />
                        </div>
                        

                    </div>
                    <div className="button">
                        <input type="submit" value="Login"  />
                    </div>
                </form>
            </div>
    </div>
    </div>
  )
}

export default Login
