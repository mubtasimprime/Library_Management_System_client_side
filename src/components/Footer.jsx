import { Link, NavLink } from "react-router";
import Logo from "../assets/open-book.png";

import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-primary-content p-8">
      <div className="flex items-center gap-2 justify-center mb-5">
        <img src={Logo} alt="logo" className="w-14 h-14" />
        <p className="font-bold text-3xl">Bookify</p>
      </div>
      <nav className="flex flex-col justify-center items-center gap-3">
        <div className="navbar-center flex mb-5">
          <ul className="flex gap-8 cursor-pointer text-base font-medium">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 text-blue-400 duration-300 hover:text-white"
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
                    ? "inline-block scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 text-blue-400 hover:text-white duration-300"
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
                    ? "inline-block scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 text-blue-400 duration-300 hover:text-white"
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
                    ? "inline-block scale-105 transform transition-transform"
                    : "inline-block hover:scale-105 text-blue-400 duration-300 hover:text-white"
                }
                to="/borrowed-books"
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Links */}
        <div className="grid grid-flow-col gap-6">
          <Link
            to="https://www.facebook.com/mohammad.rafin.71619/"
            target="_blank"
            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-600 border hover:text-white duration-500"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://x.com/"
            target="_blank"
            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-600 border hover:text-white duration-500"
          >
            <FaSquareXTwitter size={20} />
          </Link>
          <Link
            to="https://www.instagram.com/mubtasim_fuad_rafiq/"
            target="_blank"
            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-600 border hover:text-white duration-500"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mubtasim-fuad-6895a91bb/"
            target="_blank"
            className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-600 border hover:text-white duration-500"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </nav>
    </footer>
  );
};

export default Footer;
