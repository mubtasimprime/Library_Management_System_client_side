import { Link, NavLink } from "react-router";
import Logo from "../assets/open-book.png";
import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <section className="flex max-w-10/12 mx-auto py-2.5">
      {/* Dropmenu Responsive */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block text-blue-600 scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block text-blue-600 scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                }
                to="/all-books"
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block text-blue-600 scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                }
                to="/add-books"
              >
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block text-blue-600 scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                }
                to="/borrowed-books"
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={Logo} alt="" className="h-10 w-10" />
          <p className="text-2xl font-bold">Bookify</p>
        </Link>
      </div>
      {/* Pc  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 cursor-pointer text-base font-medium">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "inline-block text-blue-600 scale-105 transform transition-transform"
                  : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "inline-block text-blue-600 scale-105 transform transition-transform"
                  : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
              }
              to="/all-books"
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "inline-block text-blue-600 scale-105 transform transition-transform"
                  : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
              }
              to="/add-books"
            >
              Add Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "inline-block text-blue-600 scale-105 transform transition-transform"
                  : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
              }
              to="/borrowed-books"
            >
              Borrowed Books
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Avatar */}
      <div className="navbar-end gap-4">
        {user ? (
          <div
            className="avatar tooltip tooltip-bottom"
            data-tip={user?.displayName || "Guest"}
          >
            <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                }
                alt="User avatar"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <Link className="navbar-btn">LogOut</Link>
        ) : (
          <>
            {" "}
            <Link to="/auth/login" className="navbar-btn">
              LogIn
            </Link>
            <Link to="/auth/register" className="navbar-btn">
              SignIn
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Navbar;
