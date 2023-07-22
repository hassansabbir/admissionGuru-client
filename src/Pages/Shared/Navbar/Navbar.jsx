import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import siteLogo from "../../../assets/admissionGurruLogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="">Home</Link>
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

  return (
    <div className="navbar fixed z-10 shadow-md bg-base-100 ">
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
        <img className="w-32" src={siteLogo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
