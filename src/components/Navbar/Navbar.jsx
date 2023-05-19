import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="">All Toys</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/blog">Blogs</Link>{" "}
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/myToy">My Toys</Link>
          </li>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
            {user && (
              <div className="ml-2 tooltip" data-tip={user?.email}>
                <img
                  className="w-8 h-8 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S7x-uPyVGyBxjUf5jqXgtILiU-6nprBTDw&usqp=CAU"
                  alt=""
                />
              </div>
            )}
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
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
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-10" src={logo} alt="" />
        </Link>
        <h2 className="text-xl font-bold text-white">
          Sports <span className="text-success">ToyZone</span>{" "}
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Add TO Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
