import { Link, useNavigate } from "react-router-dom";
import ButtonNavbar from "./ButtonNavbar";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }

  return (
    <>
      <nav
        id="navbar"
        className="flex py-7 px-10 justify-between fixed w-full z-10 top-0 transition duration-300 ease-in-out bg-white bg-opacity-80"
      >
        <div className="w-1/4 flex items-center">
          <Link
            to="/"
            className="font-extrabold text-2xl hover:bg-gradient-to-r hover:from-rose-300 hover:to-amber-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transform transition duration-300 ease-in-out"
          >
            Coutura.
          </Link>
        </div>
        <div className="w-3/5 flex gap-12 justify-center items-center">
          <Link to="/">
            <ButtonNavbar name="Products" />
          </Link>
          <Link to="/categories">
            <ButtonNavbar name="Categories" />
          </Link>
        </div>
        <div className="w-1/4 flex items-center gap-5 justify-end">
          <ButtonNavbar name="Log out" onClick={handleLogout} />
          <Link
            to="/add-user"
            className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 "
          >
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
}
