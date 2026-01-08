import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const Registration = () => {
  const [error, setError] = useState("");
  const { setUser, createUser } = use(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      setError("Password must have at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must have at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Clear error
    setError("");

    createUser(email, password)
      .then((result) => {
        setUser(result);
      })
      .then((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <fieldset className="fieldset">
                {/* Email  */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {/* Password  */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
           
            </form>
            {error && (
              <p className="text-white bg-red-400 px-2 py-1 rounded-md">
                {error}
              </p>
            )}
            <span>
              Already have an acount. Please{" "}
              <Link to={"/login"} className="text-blue-500">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
