/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

export default function LoginPage() {
  const navigate = useNavigate();
  const url = "https://phase2-aio.vercel.app";
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function getLoginData(fieldName, event) {
    setLoginData({ ...loginData, [fieldName]: event.target.value });
  }

  async function handleLogin(event) {
    try {
      setLoading(true);
      event.preventDefault();

      const { data } = await axios.post(`${url}/apis/login`, loginData);
      localStorage.setItem("access_token", data.data.access_token);

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section>
        <div className="h-screen w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center">
          <div className="bg-white shadow-md rounded-3xl w-1/3 h-2/3 p-5">
            {loading ? (
              <Loading />
            ) : (
              <>
                <p className="text-center block mt-10 font-extrabold text-xl hover:bg-gradient-to-r hover:from-rose-300 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transform transition duration-300 ease-in-out">
                  Coutura.
                </p>
                <div className="mt-7">
                  <p className="font-extrabold text-center text-3xl my-3">
                    Log in
                  </p>
                  <form className="flex justify-center">
                    <div className="my-3 w-2/3">
                      <input
                        name="email"
                        type="text"
                        className="focus:border-rose-300 focus:outline-none hover:border-rose-300 border border-black p-2.5 px-5 w-full rounded-full my-1"
                        placeholder="email"
                        required
                        onChange={() => getLoginData("email", event)}
                      />
                      <input
                        name="password"
                        type="password"
                        className="focus:border-rose-300 focus:outline-none hover:border-rose-300 border border-black p-2.5 px-5 w-full rounded-full my-1"
                        placeholder="password"
                        required
                        onChange={() => getLoginData("password", event)}
                      />
                      <button
                        onClick={handleLogin}
                        className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-full mt-5"
                      >
                        Login
                      </button>
                      {/* LOGIN GOOGLE BELOM BISA */}
                      {/* <button className="rounded-full transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105  w-full mt-5 border border-gray-400">
                        Log in with google
                      </button> */}
                      <p className="text-xs text-center mt-14">
                        don't have an account?{" "}
                        <a
                          href="#"
                          className="font-bold hover:bg-gradient-to-r hover:from-rose-300 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transform transition duration-300 ease-in-out "
                        >
                          open public here
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
