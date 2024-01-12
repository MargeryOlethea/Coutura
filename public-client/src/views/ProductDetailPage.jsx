/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Title from "../components/Title";
import axios from "axios";
import Loading from "../components/Loading";
import rupiah from "../helpers/priceConverter";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductDetailPage() {
  const url = "https://phase2-aio.vercel.app";
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const noSearchBar = true;

  async function fetchProductDetail() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/${id}`,
      );
      setProduct(data.data);
      console.log(data);
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
  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <>
      <section>
        <Navbar noSearchBar={noSearchBar} />
        <div className="h-[800px] w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center pt-16 fixed">
          <div className="bg-white shadow-md rounded-3xl w-11/12 h-[600px] p-5">
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="mt-5 ml-5">
                  <Title title={"Product Details"} />
                  <p className="text-xs mt-3 text-gray-400">
                    Created at: <span>{product?.createdAt}</span>
                  </p>
                </div>
                <div className="flex mt-5 ml-5 h-[470px]">
                  <div className="w-1/2 h-[420px] overflow-hidden">
                    <img
                      src={product?.imgUrl}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="w-1/2 ml-10 flex justify-start items-center">
                    <div>
                      <p className="text-4xl font-extrabold mb-3">
                        {product?.name}
                      </p>
                      <p className="mb-3 text-rose-700 font-bold text-2xl">
                        {rupiah(product?.price)}
                      </p>
                      <span className="border border-black max-w-full rounded-full text-xs px-3 py-1">
                        {product?.Category?.name}
                      </span>
                      <div className="py-5">
                        <p className=" text-gray-600">{product?.description}</p>
                      </div>
                      <div className="mt-3">
                        <span className="my-10">Posted by: </span>
                        <span className="border border-black max-w-full rounded-full px-3 py-1 font-semibold mx-1">
                          {product?.User?.username}
                        </span>
                      </div>
                      <div className="mt-10">
                        <Link
                          to="/"
                          className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-1/2"
                        >
                          Back to home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
