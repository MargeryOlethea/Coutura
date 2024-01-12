import Title from "../components/Title";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useEffect, useState } from "react";
import { fetchProduct } from "../API fetcher/api";
import Loading from "../components/Loading";

export default function EditProductPage() {
  const status = "editProduct";
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProduct({ setLoading, id }).then(setProduct);
  }, []);

  return (
    <>
      <section>
        <div className="h-screen w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center pt-24">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="bg-white shadow-md rounded-3xl w-11/12 h-9/12 p-10">
                <Title title={"Edit Product"} />
                <ProductForm status={status} id={id} product={product} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
