/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { resizeName } from "../../utils/sizes";

export default function SampleProduct({ data, sub }) {

  return (
    <div className="bg-white">
      <div className="mx-auto container py-4  sm:py-8">
        <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-4">
          {data?.length > 0 &&
            data
              ?.filter((item) =>
                item?.description?.subcategory?.includes(sub)
              )
              .map((product) => (
                <Link to={`/productDetails/${product?._id}`} key={product?._id}>
                  <div className="relative flex flex-col items-center hover:opacity-80 duration-75">
                    <img
                      src={`${import.meta.env.VITE_ROOT_API}/Images/${product?.images?.[0].filename}`}
                      alt=""
                      className="cursor-pointer h-[180px] sm:h-[220px] w-full object-cover "
                    />
                    {
                      product?.description?.stock === "false" && <p className="absolute top-20 left-1/2 transform -translate-x-1/2  min-w-28 text-center py-1 bg-red-500 text-white px-4 rounded-sm font-abc font-semibold ">STOCK OUT</p>
                    }
                    <p className="absolute top-0 left-0 bg-green-600 px-2 py-[2px] text-sm font-semibold text-gray-100">
                      <span>Save TK : </span> 

                      {Math.ceil(product?.description?.price - product?.description?.discount)} 
                     
                    </p>
                    <div className="mt-4 flex w-full px-2 justify-between">
                      <div>
                        <p className="text-base font-semibold text-gray-900 font-abc">
                          {product?.description?.discount} Taka{" "}
                        </p>

                        <p className="mt-1 text-base font-abc text-gray-500 font-bold ">
                          {resizeName(product?.description?.productName, 20)}
                        </p>
                      </div>
                      <h3 className="text-base line-through text-gray-700 font-mont">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 "
                        />
                         {product?.description?.price}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
