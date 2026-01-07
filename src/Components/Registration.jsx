import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Registration = () => {
    const {createUser} = use(AuthContext);
    const handleRegistration = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .then(error => {
            console.log(error);
        })
        e.target.reset();
    }
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
                <input name="email" type="email" className="input" placeholder="Email" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
