import { Link } from "react-router-dom";
import ButtonColor from "../components/ButtonColor";
import ProductTable from "../components/ProductTable";
import Title from "../components/Title";
import { useState } from "react";

export default function ProductPage() {
  const [productLength, setProductLength] = useState(0);

  return (
    <>
      <section>
        <div className="mt-28 h-full w-screen">
          <div className="m-10 mt-28">
            <div className="flex justify-between">
              <div>
                <Title title={"Products"} />
                <p className="text-xs mt-3">{productLength} orders found</p>
              </div>
              <div className="flex items-center pr-6">
                <Link to="/products/create">
                  <ButtonColor name={"New Product"} />
                </Link>
              </div>
            </div>
            <ProductTable setProductLength={setProductLength} />
          </div>
        </div>
      </section>
    </>
  );
}
