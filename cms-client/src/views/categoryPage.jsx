import { useState } from "react";
import Title from "../components/Title";
import CategoryTable from "../components/CategoryTable";
import ButtonColor from "../components/ButtonColor";
import Swal from "sweetalert2";

export default function CategoryPage() {
  const [categoryLength, setCategoryLength] = useState(0);

  function handleNewCategory() {
    Swal.fire({
      title: "The button is not working (yet)!",
      text: `you are clicking to create new category, right?`,
      icon: "question",
    });
  }

  return (
    <>
      <section>
        <div className="h-full w-screen">
          <div className="m-10 mt-28">
            <div className="flex justify-between">
              <div>
                <Title title={"Categories"} />
                <p className="text-xs mt-3">
                  {categoryLength} categories found
                </p>
              </div>
              <div className="flex items-center pr-6">
                <ButtonColor onClick={handleNewCategory} name="New Category" />
              </div>
            </div>

            <CategoryTable setCategoryLength={setCategoryLength} />
          </div>
        </div>
      </section>
    </>
  );
}
