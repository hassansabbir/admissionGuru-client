import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import siteLogo from "../../../assets/admissionGurruLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">Colleges</Link>
      </li>
      <li>
        <Link to="">Admission</Link>
      </li>
      <li>
        <Link to="">My College</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar fixed z-10 shadow-md bg-base-100 max-w-[1460px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-32" src={siteLogo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          {user && (
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
