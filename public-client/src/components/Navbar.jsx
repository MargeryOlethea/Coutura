import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function Navbar({ setSearch, noSearchBar }) {
  function handleSearch(event) {
    let newSearch = event.target.value;
    setSearch(newSearch);
  }

  function handleContact() {
    Swal.fire({
      title: "Oops! I don't have the page (yet)!",
      text: `hit me up! margeryolethea@gmail.com`,
      icon: "question",
    });
  }

  function handleAboutUs() {
    Swal.fire({
      title: "Oops! I don't have the page (yet)!",
      text: `hit me up! margeryolethea@gmail.com`,
      icon: "question",
    });
  }
  return (
    <>
      <nav
        id="navbar"
        className="flex py-7 px-10 justify-between fixed w-full z-10 top-0 transition duration-300 ease-in-out bg-white bg-opacity-80"
      >
        <div className="w-1/4 flex items-center justify-between">
          <Link
            to="/"
            className="font-extrabold text-2xl hover:bg-gradient-to-r hover:from-rose-300 hover:to-amber-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transform transition duration-300 ease-in-out"
          >
            Coutura.
          </Link>
        </div>

        {!noSearchBar && (
          <>
            <div className="w-3/5">
              <form className="rounded-full">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search"
                    className=" bg-transparent block p-2.5 w-full text-sm text-black border border-black rounded-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                    style={{}}
                    onChange={handleSearch}
                    placeholder="Search by description"
                  />
                </div>
              </form>
            </div>
          </>
        )}

        <div className="w-1/4 flex items-center gap-5 justify-end">
          <p
            onClick={handleContact}
            href="#"
            className="font-semibold text-black hover:bg-gradient-to-r hover:from-rose-200 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:scale-110 transform transition duration-300 ease-in-out "
          >
            Contact
          </p>
          <p
            onClick={handleAboutUs}
            className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 "
          >
            About Us
          </p>
        </div>
      </nav>
    </>
  );
}
