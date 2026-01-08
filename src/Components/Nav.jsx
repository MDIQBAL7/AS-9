import { use } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebaseinit";
import "../../src/App.css";

const Nav = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log("This is a user", user.diaplayName);

  const handleSignout = () => {
    signOutUser(auth);
  };

  const li = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-amber-200 shadow-md px-4 md:px-8">
      {/* Left: Logo */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <MdOutlineArrowDropDownCircle className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {li}
          </ul>
        </div>

        <NavLink to="/" className="text-xl font-bold ml-2">
          ToyTopia
        </NavLink>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
         {li}
        </ul>
      </div>

      {/* Right: Auth */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* Avatar with tooltip */}
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={user.photoURL} alt="user" />
                  <span
                    className="
          absolute top-full left-1/2 -translate-x-1/2 mt-2
          bg-gray-900 text-white text-xs px-3 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition duration-300 whitespace-nowrap
        "
                  >
                    {user.displayName}
                  </span>
                </div>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleSignout}
              className="btn btn-sm btn-outline hidden sm:inline-flex"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-sm btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
