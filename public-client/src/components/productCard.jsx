/* eslint-disable react/prop-types */
import rupiah from "../helpers/priceConverter";

export default function ProductCard({ product, onClick }) {
  return (
    <>
      {/* CARD START */}
      <div
        onClick={onClick}
        className="bg-white p-4 max-h-full rounded-3xl shadow-md hover:scale-105 transition ease-in-out duration-300"
      >
        <div className="h-80 overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-full"
            src={product.imgUrl}
            alt="Fashion Photo"
          />
        </div>
        <div className="my-3">
          <span className="border border-black max-w-full rounded-full text-xs px-3 py-1">
            {product.Category.name}
          </span>
          <p className="font-bold text-xl mt-3">{product.name}</p>
          <p className="text-xs">
            {product.description.substring(0, 70)}
            <span className="text-gray-400">...</span>
          </p>
          <p className="my-3 font-semibold text-rose-700">
            {rupiah(product.price)}
          </p>
        </div>
      </div>
      {/* END */}
    </>
  );
}
