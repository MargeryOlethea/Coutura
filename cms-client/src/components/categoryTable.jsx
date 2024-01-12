/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoryBodyRow from "./CategoryBodyRow";
import Loading from "./Loading";
import { fetchCategories } from "../API fetcher/api";

export default function CategoryTable({ setCategoryLength }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories({ setLoading }).then(setCategories);
  }, []);

  if (categories) {
    setCategoryLength(categories.length);
  }

  return (
    <>
      <div className="shadow-lg p-5 my-5 rounded-3xl">
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* HEADER */}
            <div className="w-full mt-5">
              <div className="bg-gradient-to-r from-rose-200 to-amber-400 p-3 px-7 rounded-full flex font-bold mb-7">
                <p className="w-2/12">id</p>
                <p className="w-2/12">name</p>
                <p className="w-3/12">last update</p>
                <p className="w-5/12 pl-3">action</p>
              </div>
              {/* BODY ROW HERE */}
              {categories.map((category) => {
                return (
                  <CategoryBodyRow key={category.id} category={category} />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
