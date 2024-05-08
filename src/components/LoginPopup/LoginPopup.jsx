import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { GoogleLogin } from "@react-oauth/google";

const LoginPopup = ({ setShowLoginForm }) => {
  //google authenications
  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };
  const [currTitle, setCurrTitle] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currTitle}</h2>
          <img
            onClick={() => setShowLoginForm(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currTitle === "Login" ? (
            <> </>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          {currTitle === "Login" ? (
            <> </>
          ) : (
            <input type="number" placeholder="Your Phone Number" required />
          )}
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currTitle === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to terms ofuse & privacy policy</p>
        </div>

        {currTitle === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrTitle("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrTitle("Login")}>Login here</span>
          </p>
        )}
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </form>
    </div>
  );
};

export default LoginPopup;
