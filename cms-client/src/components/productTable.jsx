/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductBodyRow from "./ProductBodyRow";
import Loading from "./Loading";
import { fetchProducts, baseApi } from "../API fetcher/api";
import Swal from "sweetalert2";

export default function ProductTable({ setProductLength }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts({ setLoading }).then(setProducts);
  }, []);

  if (products) {
    setProductLength(products.length);
  }

  // DELETE FILE
  let dataDelete = "";
  async function onDelete(key) {
    try {
      setLoading(true);

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        dataDelete = await baseApi.delete(
          `/apis/branded-things/products/${key}`,
        );
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    } finally {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: dataDelete.data.message,
      });

      fetchProducts({ setLoading }).then(setProducts);
    }
  }

  return (
    <>
      <div className="shadow-lg p-5 my-5 rounded-3xl">
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full mt-5">
            <div className="bg-gradient-to-r from-rose-200 to-amber-400 p-3 px-7 rounded-full flex font-bold mb-7">
              <p className="w-1/12">id</p>
              <p className="w-3/12">image</p>
              <p className="w-1/12 pl-2">name</p>
              <p className="w-2/12">description</p>
              <p className="w-1/12">price</p>
              <p className="w-2/12">created by</p>
              <p className="w-1/12">stock</p>
              <p className="w-1/12">action</p>
            </div>

            {products &&
              products.map((product) => {
                return (
                  <ProductBodyRow
                    key={product.id}
                    product={product}
                    onDelete={() => onDelete(product.id)}
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}
