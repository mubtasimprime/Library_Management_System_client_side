import { Link, NavLink } from "react-router";
import Logo from "../assets/open-book.png";
import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!", {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const tapEffect = {
    scale: 0.95,
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex max-w-9/12 mx-auto py-2.5"
    >
      {/* Logo and Dropdown */}
      <motion.div variants={item} className="navbar-start">
        <div className="dropdown">
          <motion.div
            whileHover={hoverEffect}
            whileTap={tapEffect}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {["/", "/all-books", "/add-books", "/borrowed-books"].map(
              (path) => (
                <motion.li key={path} whileHover={{ x: 5 }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block text-blue-600 scale-105 transform transition-transform"
                        : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                    }
                    to={path}
                  >
                    {path === "/"
                      ? "Home"
                      : path === "/all-books"
                      ? "All Books"
                      : path === "/add-books"
                      ? "Add Books"
                      : "Borrowed Books"}
                  </NavLink>
                </motion.li>
              )
            )}
          </motion.ul>
        </div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="flex items-center justify-center gap-2">
            <motion.img
              src={Logo}
              alt=""
              className="h-10 w-10"
              whileHover={{ rotate: 10 }}
            />
            <p className="text-2xl font-bold">Bookify</p>
          </Link>
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div variants={item} className="navbar-center hidden lg:flex">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex gap-8 cursor-pointer text-base font-medium"
        >
          {["/", "/all-books", "/add-books", "/borrowed-books"].map((path) => (
            <motion.li
              key={path}
              variants={item}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block text-blue-600 scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 hover:text-blue-600 duration-300"
                }
                to={path}
              >
                {path === "/"
                  ? "Home"
                  : path === "/all-books"
                  ? "All Books"
                  : path === "/add-books"
                  ? "Add Books"
                  : "Borrowed Books"}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* User Avatar and Auth Buttons */}
      <motion.div variants={item} className="navbar-end gap-4">
        {user ? (
          <motion.div
            className="avatar tooltip tooltip-bottom"
            data-tip={user?.displayName || "Guest"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.div>
        ) : null}

        {user ? (
          <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
            <Link onClick={handleLogout} className="navbar-btn">
              LogOut
            </Link>
          </motion.div>
        ) : (
          <>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Link to="/auth/login" className="navbar-btn">
                LogIn
              </Link>
            </motion.div>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Link to="/auth/register" className="navbar-btn">
                SignIn
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Navbar;
