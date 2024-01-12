/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ButtonColor from "./ButtonColor";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ProductsCatalogue({ search }) {
  const url = "https://phase2-aio.vercel.app";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [listCategories, setListCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState({});
  const [sorting, setSorting] = useState("DESC");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      setLoading(true);
      // const dataProducts = await axios.get(`${url}/apis/pub/branded-things/products?q=&i=&limit=13&page=1&sort=DESC`)

      const dataProducts = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${category}&limit=12&page=${pageNumber}&sort=${sorting}`,
      );
      setProducts(dataProducts.data.data.query);
      setPages(dataProducts.data.data.pagination);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      setLoading(true);
      const dataCategories = await axios.get(
        `${url}/apis/pub/branded-things/categories`,
      );
      setListCategories(dataCategories.data.data);
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

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [search, category, sorting, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [search, category]);

  // filter category
  function handleCategory(event) {
    setCategory(event.target.value);
  }

  // sorting
  function handleNewest() {
    console.log("newest");
    setSorting("DESC");
  }

  function handleOldest() {
    console.log("oldest");
    setSorting("ASC");
  }

  // pagination
  let totalPages = [];
  for (let i = 1; i <= pages.totalPage; i++) {
    totalPages.push(i);
  }

  function handleNext() {
    pages.currentPage < pages.totalPage && setPageNumber(pageNumber + 1);
  }

  function handlePrevious() {
    pages.currentPage > 1 && setPageNumber(pageNumber - 1);
  }

  function handleMovePage(event) {
    setPageNumber(event.target.value);
  }

  // otw product detail
  function handleProductDetail(key) {
    navigate(`/products/${key}`);
    console.log(`clicked! ${key}`);
  }

  return (
    <>
      {/* BAGIAN PRODUCTS DAN DESCRIPTION */}
      <div className="mx-10 my-5">
        <div className="flex flex-row justify-between">
          <span className="font-extrabold text-5xl">Products</span>
          <div>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <p className="text-xs">
              Magnam dolores, quae iure soluta atque deserunt est recusandae
              quam dolor similique?
            </p>
            <p className="text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* LOADING CONDITION */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* SORT & FILTER */}
          <div className="flex m-10 justify-between">
            <div className=" flex gap-3 justify-center items-center">
              <h1 className="font-bold">Sort By</h1>
              <ButtonColor onClick={handleNewest} name="Newest" />
              <ButtonColor onClick={handleOldest} name="Oldest" />
            </div>
            <div className="flex gap-3 items-center ">
              <h1 className="font-bold">Filter By</h1>
              <select
                name="category"
                className="border border-black p-2 px-6 rounded-full mr-4"
                onChange={handleCategory}
                defaultValue={category}
              >
                {/* <option selected disabled>Category</option> */}
                <option value="">Categories</option>

                {listCategories.map((category) => {
                  return (
                    <option key={category.id} value={category.name} selected>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* CARD */}
          <div className="grid grid-cols-4 gap-6 m-10">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductDetail(product.id)}
                />
              );
            })}
          </div>

          {/* PAGE NAVIGATOR */}
          <div className="max-w-lg mx-auto bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <ButtonColor name="Previous" onClick={handlePrevious} />
              <div className="flex mx-5">
                {totalPages.map((page) => {
                  return (
                    <>
                      {pages.currentPage === page && (
                        <button
                          className="mx-3 font-semibold hover:scale-125 text-xl text-rose-700"
                          key={page}
                          value={page}
                          onClick={handleMovePage}
                        >
                          {page}
                        </button>
                      )}
                      {pages.currentPage !== page && (
                        <button
                          className="mx-3 font-semibold hover:scale-125"
                          key={page}
                          value={page}
                          onClick={handleMovePage}
                        >
                          {page}
                        </button>
                      )}
                    </>
                  );
                })}
              </div>
              <ButtonColor name="Next" onClick={handleNext} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
