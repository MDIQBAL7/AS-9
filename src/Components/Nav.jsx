import { NavLink } from "react-router";

const Nav = ({ user, handleLogout }) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      {/* Left: Logo */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <MdOutlineArrowDropDownCircle />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="/" className="text-xl font-bold ml-2">
          ToyTopia
        </NavLink>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold text-primary" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "font-semibold text-primary" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right: Auth */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* Avatar with tooltip */}
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={user.photoURL} alt="user" />
                </div>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
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
