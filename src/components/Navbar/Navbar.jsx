import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">All Toys</Link>
            </li>
            <li>
              <Link>My Toys</Link>
            </li>
            <li>
              <Link>Add A Toy</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12" src={logo} alt="" />
        </Link>
        <h1 className="text-white text-3xl font-bold">
          Sports <span className="text-success">ToyZone</span>{" "}
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>All Toys</Link>
          </li>
          <li>
            <Link>My Toys</Link>
          </li>
          <li>
            <Link>Add A Toy</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-accent">Add to Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
