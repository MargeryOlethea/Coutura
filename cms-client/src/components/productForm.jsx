/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchCategories, baseApi } from "../API fetcher/api";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ status, product, id }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: product?.name ?? "",
    price: product?.price ?? 0,
    stock: product?.stock ?? 0,
    imgUrl: product?.imgUrl ?? "",
    categoryId: product?.categoryId ?? 0,
    description: product?.description ?? "",
  });

  useEffect(() => {
    fetchCategories({ setLoading }).then(setCategories);
  }, []);

  // NGAMBIL DATA DARI ON CHANGE
  function getFormData(fieldName, event) {
    let value = event.target.value;

    if (
      fieldName === "price" ||
      fieldName === "stock" ||
      fieldName === "categoryId"
    ) {
      value = +value;
    }
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  }

  //PROCESS DATA
  async function processData(event) {
    try {
      event.preventDefault();
      setLoading(true);

      if (status === "createProduct") {
        await baseApi.post(`/apis/branded-things/products`, formData);

        Swal.fire({
          title: "Success",
          text: "Success created new product",
          icon: "success",
        });
      }

      if (status === "editProduct") {
        await baseApi.put(`/apis/branded-things/products/${id}`, formData);

        Swal.fire({
          title: "Success",
          text: "Success edited new product",
          icon: "success",
        });
      }

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
      {loading ? (
        <Loading />
      ) : (
        <form className="mt-12" onSubmit={processData}>
          <div className="flex gap-10">
            {/* KIRI */}
            <div className="w-full">
              {/* NAME */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  onChange={(event) => getFormData("name", event)}
                  className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                  value={formData.name}
                ></input>
              </div>

              {/* PRICE */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  onChange={(event) => getFormData("price", event)}
                  className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="150.000"
                  value={formData.price}
                ></input>
              </div>

              {/* STOCK */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  onChange={(event) => getFormData("stock", event)}
                  className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="10"
                  value={formData.stock}
                ></input>
              </div>

              {/* IMAGE */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  onChange={(event) => getFormData("imgUrl", event)}
                  className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  type="text"
                  name="imgUrl"
                  id="image"
                  placeholder="Image URL"
                  value={formData.imgUrl}
                ></input>
              </div>
            </div>

            {/* KANAN */}
            <div className="w-full">
              {/* CATEGORY */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  onChange={(event) => getFormData("categoryId", event)}
                  className="border border-black rounded-full p-2 px-5 w-full focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  name="categoryId"
                  id="category"
                  value={formData.categoryId}
                >
                  <option selected hidden>
                    ...choose
                  </option>
                  {categories?.map((category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* DESCRIPTION */}
              <div className="my-5">
                <label
                  className="text-xs font-bold block mb-2 ml-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  onChange={(event) => getFormData("description", event)}
                  className="border border-black rounded-3xl p-2 px-5 w-full h-32 focus:border-rose-300 focus:outline-none hover:border-rose-300"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  value={formData.description}
                ></input>
              </div>

              {/* BUTTON */}
              <button className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-1/2 ml-auto block mt-36">
                {status === "editProduct" ? "Edit" : "Create"}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
