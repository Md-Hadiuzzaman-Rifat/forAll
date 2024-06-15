/* eslint-disable no-unused-vars */
//  eslint-disable no-unused-vars

import { useEffect, useState } from "react";
import {
  useAddCategoryMutation,
  useGetCategoryQuery,
} from "../../features/category/categoryApi";

function CategoryForm() {
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const [addCategory, { isLoading: addLoading, isSuccess: addSuccess }] = useAddCategoryMutation();
  const { data: getCatData, isSuccess: getCatSuccess } = useGetCategoryQuery();

  const upload = (e) => {
    e.preventDefault();
    if (!file || !category) {
      return;
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category?.toLowerCase());
      addCategory(formData);
    }
  };

  const handleDelete = (imageName) => {
    fetch(`${import.meta.env.VITE_ROOT_API}/category/${imageName}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    alert("Deleted Successfully!") ? "" : location.reload();
  };

  return (
    <div className="container mx-auto max-w-2xl py-5 sm:px-6 sm:py-12 lg:max-w-7xl">
      {
        addLoading && <h2 className="text-blue-500 mb-8 p-4 font-semibold text-2xl bg-blue-100 border-2 border-blue-500">Wait a second and Reload....</h2> 
      }
      <form onSubmit={upload}>
        <input
          required
          className="m-2"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          required
          type="text"
          value={category}
          placeholder="Category Name"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 m-2 font-semibold text-white text-base rounded-md p-2"
          onClick={upload}
        >
          Create Category
        </button>
      </form>

      <div className="grid mt-4 p-4 bg-gray-100 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {getCatSuccess && getCatData?.length === 0 && "No Category Found"}
        {getCatSuccess &&
          getCatData?.length > 0 &&
          getCatData.map((item) => (
            <div key={item._id} className="border-2  overflow-hidden">
              <div className="flex justify-between font-semibold bg-white px-4 text-xl items-center">
                <p className="">{item?.category?.substring(0, 10)}</p>
                <p
                  onClick={() => handleDelete(item?.image)}
                  className="cursor-pointer text-red-500 text-sm"
                >
                  DELETE
                </p>
              </div>
              <div className="max-w-[300px]">
                <img
                  key={item._id}
                  src={`${import.meta.env.VITE_ROOT_API}/Images/${item.image}`}
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default CategoryForm;
