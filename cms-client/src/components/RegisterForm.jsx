/* eslint-disable react/prop-types */
import { useState } from "react";
import { baseApi } from "../API fetcher/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ setLoading }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function getData(field, event) {
    setFormData({ ...formData, [field]: event.target.value });
  }

  async function processData(event) {
    try {
      event.preventDefault();
      setLoading(true);

      await baseApi.post("/apis/add-user", formData);

      Swal.fire({
        title: "Success",
        text: "Success created new user",
        icon: "success",
      });

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
      <form className="mt-0" onSubmit={processData}>
        <div className="my-5">
          <label
            className="text-xs font-bold block mb-2 ml-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={() => {
              getData("username", event);
            }}
            className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
            type="username"
            name="username"
            id="username"
            placeholder="Username"
          ></input>
        </div>

        <div className="my-5">
          <label className="text-xs font-bold block mb-2 ml-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={() => {
              getData("email", event);
            }}
            className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
            type="email"
            name="email"
            id="email"
            placeholder="Example@mail.com"
          ></input>
        </div>

        <div className="my-5">
          <label
            className="text-xs font-bold block mb-2 ml-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={() => {
              getData("password", event);
            }}
            className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          ></input>
        </div>

        <div className="my-5">
          <label
            className="text-xs font-bold block mb-2 ml-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            onChange={() => {
              getData("phoneNumber", event);
            }}
            className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
            type="type"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="081234567890"
          ></input>
        </div>

        <div className="my-5">
          <label
            className="text-xs font-bold block mb-2 ml-1"
            htmlFor="address"
          >
            Address
          </label>
          <input
            onChange={() => {
              getData("address", event);
            }}
            className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
            type="text"
            name="address"
            id="address"
            placeholder="Street Address"
          ></input>
        </div>

        <button className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-1/2 ml-auto block mt-16">
          Add New User
        </button>
      </form>
    </>
  );
}
