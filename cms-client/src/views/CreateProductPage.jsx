import ProductForm from "../components/ProductForm";
import Title from "../components/Title";

export default function CreateProductPage() {
  const status = "createProduct";
  return (
    <>
      <section>
        <div className="h-screen w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center pt-24">
          <div className="bg-white shadow-md rounded-3xl w-11/12 h-9/12 p-10">
            <Title title={"Create New Product"} />
            <ProductForm status={status} />
          </div>
        </div>
      </section>
    </>
  );
}
