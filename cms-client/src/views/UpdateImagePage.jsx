import { useEffect, useState } from "react";
import Title from "../components/Title";
import UploadImage from "../components/UploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { baseApi, fetchProduct } from "../API fetcher/api";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

export default function UpdateImagePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct({ setLoading, id }).then(setProduct);
  }, []);

  let dataEdit = "";

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);

      let formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      dataEdit = await baseApi.patch(
        `/apis/branded-things/products/${id}`,
        formData,
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    } finally {
      setLoading(false);
      navigate("/");

      Swal.fire({
        icon: "success",
        title: dataEdit.data.message,
      });
    }
  }
  return (
    <>
      <section>
        <div className="h-screen w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center pt-24">
          <div className="bg-white shadow-md rounded-3xl w-11/12 h-9/12 p-10">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Title title={"Update Image"} />
                <p className="mt-2 text-md">
                  Product:{" "}
                  <span className="font-semibold text-rose-500">
                    {product.name}
                  </span>
                </p>

                <div className="flex gap-10">
                  {/* KIRI */}
                  <div className="w-full mt-10">
                    <div className="relative rounded-3xl items-center h-80 overflow-hidden">
                      <img
                        src={product.imgUrl}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* KANAN */}
                  <div className="w-full mt-10">
                    <form onSubmit={handleSubmit}>
                      <UploadImage file={file} setFile={setFile} />
                      <button
                        type="submit"
                        className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-1/2 ml-auto block mt-20"
                      >
                        Upload
                      </button>
                    </form>
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
