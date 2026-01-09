import React, { use, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Registration = () => {
  const [see, setSee] = useState(false);
  const [error, setError] = useState("");
  const { setUser, createUser, googleSignIn } = use(AuthContext);

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
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
    e.target.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
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
                  className="input  p-3 focus:outline-0 focus:outline-offset-0focus:outline-none  border-1 rounded-lg"
                  placeholder="Email"
                />
                {/* Password  */}
                <label className="label">Password</label>
                <div className="flex items-center border-1 rounded-lg">
                  <input
                    name="password"
                    type = {see ? 'text' : 'password'}
                    className="input border-0 p-3  focus:outline-0 focus:outline-offset-0 bg-red-50 focus:outline-none rounded-l-lg"
                    placeholder="Password"
                  />
                  <span onClick={() => setSee(!see)} className="p-3.5 border-0 focus:outline-0 focus:outline-offset-0 bg-red-50 focus:outline-none rounded-r-lg">
                    {
                      see ? <FaEye /> : <FaEyeSlash /> 
                    }
                  </span>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <ToastContainer position="top-right" autoClose={3000} />
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
