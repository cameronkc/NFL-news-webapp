import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="justify-center p-10 mt-20 card bg-base-200 b w-80">
      {error && (
        <div className="alert alert-error">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              q
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 mx-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <label>{error}</label>
          </div>
        </div>
      )}
      <form className="form-control" onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="example@email.com"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label" type="password">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="********"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary px-5 mt-6" type="submit">
          Login
        </button>
      </form>
      <GoogleButton className="mt-4" type="dark" onClick={handleGoogleSignIn} />
      <p className="mt-2">
        Don't have an account?
        <Link to="/signup">
          <span className="link-primary underline pl-2">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
