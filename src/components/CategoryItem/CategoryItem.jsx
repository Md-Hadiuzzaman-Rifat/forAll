/* eslint-disable no-unused-vars */
// import Image1 from "../../assets/formal.png";

import { Link } from "react-router-dom";
import { useGetCategoryQuery } from "../../features/category/categoryApi";

const CategoryItem = () => {
  const { data, isLoading, isSuccess } = useGetCategoryQuery();
  console.log(data);
  return (
    <div className="py-8">
      <div className="container">
        {isLoading && <p>Sorry for loading...</p>}
        {!isLoading && data?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* first col */}
            {data?.map((item) => (
              <div key={item?._id}>
                <div className="relative">
                  <img
                    src={`${import.meta.env.VITE_ROOT_API}/Images/${
                      item?.image
                    }`}
                    alt=""
                  />
                  <button className="absolute border bottom-4 left-4 bg-black bg-opacity-40 text-brandGreen border-green-400 rounded-3xl px-6 py-2 cursor-pointer">Browse</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
