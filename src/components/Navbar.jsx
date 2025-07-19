import { Link, NavLink } from "react-router";
import Logo from "../assets/open-book.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!", {
          autoClose: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const hoverEffect = { scale: 1.05, transition: { duration: 0.2 } };
  const tapEffect = { scale: 0.95 };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex max-w-9/12 mx-auto py-2.5 justify-between items-center"
    >
      {/* Logo & Mobile Dropdown */}
      <div className="navbar-start flex items-center gap-3">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                to="/all-books"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                to="/add-books"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                to="/borrowed-books"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={Logo}
              alt="Bookify Logo"
              className="h-10 w-10"
              whileHover={{ rotate: 10 }}
            />
            <p className="text-2xl font-bold">Bookify</p>
          </Link>
        </motion.div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex navbar-center">
        <ul className="flex gap-8 text-base font-medium">
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/all-books"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/add-books"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Add Books
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/borrowed-books"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Borrowed Books
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side Buttons */}
      <div className="navbar-end gap-4 flex items-center">
        {user && (
          <div
            className="avatar tooltip tooltip-bottom"
            data-tip={user?.displayName || "Guest"}
          >
            <div className="w-7 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                }
                alt="User Avatar"
              />
            </div>
          </div>
        )}

        {user ? (
          <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
            <button onClick={handleLogout} className="navbar-btn">
              Logout
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Link to="/auth/login" className="navbar-btn">
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Link to="/auth/register" className="navbar-btn">
                SignUp
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Navbar;
