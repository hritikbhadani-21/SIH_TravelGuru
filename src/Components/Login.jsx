import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://source.unsplash.com/random/600x800?beach"
          alt="Welcome"
          className="login-image"
        />
        <div className="login-welcome">
          <h3>Welcome to the community</h3>
          <p>Login to explore</p>
        </div>
      </div>

      <div className="login-right">
        <h2>Login your account!</h2>

        <div className="login-form">
          <div className="login-input-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <div className="login-forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn">Continue</button>

          <div className="login-signin-options">
            <p>Sign in With</p>
            <div className="social-icons">
              <button>📘</button>
              <button>🟢</button>
              <button>🍏</button>
            </div>
          </div>

          <p className="login-signup">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
