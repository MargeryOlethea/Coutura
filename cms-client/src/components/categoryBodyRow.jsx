import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function CategoryBodyRow({ category }) {
  function handleEditCategory(name) {
    Swal.fire({
      title: "The button is not working (yet)!",
      text: `you are clicking to edit ${name}, right?`,
      icon: "question",
    });
  }

  function handleDeleteCategory(name) {
    Swal.fire({
      title: "The button is not working (yet)!",
      text: `you are clicking to delete ${name}, right?`,
      icon: "question",
    });
  }
  return (
    <>
      <div className="border border-gray-200 pr-7 py-2 rounded-3xl my-3 flex items-center">
        <p className="w-2/12 scale-90 ml-3">{category.id}</p>
        <p className="w-2/12 scale-90 font-bold text-lg">{category.name}</p>
        <p className="w-3/12 scale-90 text-gray-500">
          {category.updatedAt.split("T")[0]}
        </p>
        <div className="w-5/12 scale-90 flex gap-5">
          <button
            onClick={() => handleEditCategory(category.name)}
            className="rounded-full bg-gradient-to-r from-rose-200 to-amber-400 hover:bg-gradient-to-tl transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105 w-4/6"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteCategory(category.name)}
            className="rounded-full transition duration-500 ease-in-out p-2.5 px-7 font-semibold hover:scale-105  w-4/6 border border-gray-400 text-rose-700"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
