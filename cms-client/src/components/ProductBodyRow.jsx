import rupiah from "../helpers/priceConverter";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductBodyRow({ product, onDelete }) {
  return (
    <>
      <div className="border border-gray-200 p-2 px-7 rounded-3xl my-3 flex items-center">
        {/* id */}
        <p className="w-1/12 scale-90">{product.id}</p>

        {/* image */}
        <div className="relative w-3/12 rounded-xl h-52 overflow-hidden group">
          <Link to={`/products/${product.id}/patch-image`}>
            <img
              src={product.imgUrl}
              alt="product photo"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-rose-400 bg-opacity-50 opacity-0 flex items-center justify-center transition-opacity group-hover:opacity-100">
              <p className="text-white font-bold">Replace Image</p>
            </div>
          </Link>
        </div>

        {/* name */}
        <p className="w-1/12 scale-90 font-bold ml-2">{product.name}</p>

        {/* description */}
        <p className="w-2/12 scale-90 italic text-gray-500">
          {product.description}
        </p>

        {/* price */}
        <p className="w-1/12 scale-90 font-bold text-rose-700">
          {rupiah(product.price)}
        </p>

        {/* category */}
        <p className="w-2/12 scale-90">{product.User.username}</p>

        {/* stock */}
        <p className="w-1/12 scale-90">{product.stock}</p>

        {/* action */}
        <div className="w-1/12 scale-90 flex-col gap-5">
          <Link to={`/products/${product.id}/edit`}>
            <button className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-full">
              Edit
            </button>
          </Link>
          <button
            onClick={onDelete}
            className="rounded-full transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105  w-full mt-5 border border-gray-400 text-rose-700"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
