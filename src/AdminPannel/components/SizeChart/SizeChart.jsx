/* eslint-disable no-unused-vars */
//  eslint-disable no-unused-vars

import { useEffect, useState } from "react";
import {
  useAddSizeChartMutation,
  useGetSizeChartQuery,
  useDeleteSizeChartQuery,
} from "../../../features/SizeChart/SizeChartSlice";

function SizeChart() {
  const [file, setFile] = useState();
  const [sizeName, setSizeName] = useState();

  const [sizeChart, { isLoading: addLoading, isSuccess: addSuccess }] =
    useAddSizeChartMutation();
  const { data: getSizeChart, isSuccess: getSizeChartSuccess } =
    useGetSizeChartQuery();

  const upload = (e) => {
    e.preventDefault();
    if (!file || !sizeName) {
      return;
    } else {
      const formData = new FormData();
      formData.append("size", file);
      formData.append("sizeChart", sizeName.toLowerCase());
      sizeChart(formData);
    }
  };

  const handleDelete = (imageName) => {
    fetch(`${import.meta.env.VITE_ROOT_API}/deleteSizeChart/${imageName}`, {
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
      <h1 className="text-3xl mb-8 font-abc font-bold text-green-500 underline">
        Create Size Chart
      </h1>

      <form onSubmit={upload}>
        <input
          required
          className="m-2"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type="text"
          required
          placeholder="Size Chart Name"
          onChange={(e) => setSizeName(e.target.value)}
          value={sizeName}
        />
        <button
          className="bg-green-500 m-2 font-semibold text-white text-base rounded-md p-2"
          type="submit"
          onClick={upload}
        >
          Create SizeChart
        </button>
      </form>

      <div className="grid mt-4 p-4 bg-gray-100 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {getSizeChartSuccess &&
          getSizeChart?.length === 0 &&
          "No SizeChart Found"}
        {getSizeChartSuccess &&
          getSizeChart?.length > 0 &&
          getSizeChart.map((item) => (
            <div key={item._id} className="border-2  overflow-hidden">
              {/* {console.log(item)} */}
              <div className="flex justify-between font-semibold bg-white px-4 text-xl items-center">
                {/* {console.log(item)} */}
                <p className="">{item?.sizeChart}</p>
                <p
                  onClick={() => handleDelete(item?._id)}
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
export default SizeChart;
