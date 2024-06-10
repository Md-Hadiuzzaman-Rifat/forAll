// /* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { popUpOpen} from "../../features/quickView/quickViewSlice"

const ProductLayout2 = ({ data }) => {
  const { images, _id } = data || {};

  const navigate = useNavigate();

  const dispatch= useDispatch()
  const { price, discount } = data?.description || {};

  const handleDetails = (id) => {
    navigate(`/productDetails/${id}`);
    window.scrollTo(0, 0);
  };

  const handlePopUp=(data)=>{
    dispatch(popUpOpen(data))
  }

  return (
    <div>
      {data && (
        <div>
          <div className="relative flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_ROOT_API}/Images/${images[0]?.filename}`}
              alt=""
              className="cursor-pointer h-[180px] sm:h-[220px] w-full object-cover hover:opacity-70 duration-75"
              onClick={() => handleDetails(_id)}
            />
            <div className="flex items-center bg-white w-[120px] rounded-md absolute bottom-[-10px] justify-center gap-2 shadow-lg">
              <p className="font-semibold">৳{discount}</p>
              <p className="font-thin line-through">৳{price}</p>
            </div>
          </div>
          <div>
            {/* {
              console.log(data)
            } */}
            <p onClick={()=>handlePopUp(data)} className="text-center mt-4 bg-gray-800 text-white p-1 cursor-pointer font-semibold">
              {" "}
              + Quick View
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductLayout2;
