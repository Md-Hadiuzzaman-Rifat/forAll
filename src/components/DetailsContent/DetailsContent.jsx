/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { makeSizes } from "../../utils/sizes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { orderFormOpen } from "../../features/cartHandler/cartHandler";
import { addToCart, decreaseCart } from "../../features/cartSlice/cartSlice";
import { PiToiletPaperLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import SizeModal from "../SizeModal/SizeModal";
import { sizeModalOpen } from "../../features/sizeModalSlice/sizeModalSlice";

const DetailsContent = ({ desc, img }) => {
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const [selectSize, setSelectSize] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [warning, setWarning] = useState(false);
  const [amountWarning, setAmountWarning] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    brand,
    category,
    description,
    shortDescription,
    discount,
    extra,
    extraInfo,
    price,
    productName,
    review,
    stock,
    otherLink,
    sizeChart
  } = desc || {};

  const sizes = makeSizes(extra);

  // make a single number to array for rating
  let newArr = [];
  if (review) {
    for (let el = 0; el < review; el++) {
      newArr.push(el);
    }
  }

  const dispatch = useDispatch();

  const addCount = () => {
    if (sizes && !selectSize) {
      setWarning(true);
    } else {
      setCount((prev) => prev + 1);
      setWarning(false);
      dispatch(
        addToCart({
          id: `${id}>>>${selectSize}`,
          name: desc?.productName,
          image: `${import.meta.env.VITE_ROOT_API}/Images/${img[0]?.filename}`,
          price: desc?.discount,
          cartQuantity: count,
        })
      );
    }
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      dispatch(
        decreaseCart({
          id: `${id}>>>${selectSize}`,
          name: desc.productName,
          image: `${import.meta.env.VITE_ROOT_API}/Images/${img[0]?.filename}`,
          price: desc.discount,
          cartQuantity: count,
        })
      );
    }
  };

  const handleSize = (value, index) => {
    setSelectSize(value);
    setSelectedIndex(index);
  };

  const handlePurchase = () => {
    if ( count === 0) {
      setWarning(true);
    } else {
      setWarning(false);
      // dispatch(orderFormOpen());
      navigate("/shoppingCart");
    }
  };

  const { isOpen } = useSelector((state) => state.size);

  function openModal() {
    dispatch(sizeModalOpen(sizeChart));
  }

  return (
    <div className="  w-full sm:w-auto md:w-8/12 lg:w-6/12 items-center">
      {isOpen && <SizeModal />}
      <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600 font-abc  dark:text-gray-400">
        {category?.toUpperCase()}
      </p>
      <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 mt-4 dark:text-gray-200 font-abc">
        {productName?.toUpperCase()}
      </h2>

      {/* // total start  */}
      <div className=" flex flex-row justify-between  mt-5">
        
        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 font-abc cursor-pointer">
          {review} reviews
        </p>
      </div>
      {/* price  */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 ">
          <p className=" font-semibold text-gray-400 line-through lg:text-xl text-md lg:leading-6 leading-5 mt-4 font-abc">
            Tk: {price}
          </p>
          <span className="inline font-semibold, lg:text-2xl text-xl lg:leading-6 leading-5 font-abc mt-4 font-bold">
            Tk: {discount}
          </span>
        </div>
          
        {
          sizeChart && <button
          onClick={openModal}
          className="flex underline gap-2 hover:text-gray-600 items-center me-12  text-indigo-700 "
        >
          {" "}
          <PiToiletPaperLight className="text-2xl " /> Size Guide
        </button>
        }
      </div>

      <p className="font-abc font-semibold mt-4">{extraInfo?.toUpperCase()}</p>
      {/* sizes start */}
      <div className="flex flex-row gap-2 mt-2 flex-wrap">
        {sizes && sizes?.map((item, index) => (
          <div
            key={index}
            className={`${
              selectedIndex === index
                ? "transition border cursor-pointer hover:shadow-md font-bold bg-gray-800 text-gray-100 px-6 py-1 duration-100"
                : "transition border cursor-pointer hover:shadow-md px-6 py-1 duration-100"
            }`}
            onClick={() => handleSize(item, index)}
          >
            {item.replace(/\s/g, "").toUpperCase()}
          </div>
        ))}
      </div>
      {/*  sizes end  */}

      {/* // warning  */}
      <div style={warning ? { display: "block" } : { display: "none" }}>
        <p className="bg-red-200 border font-semibold text-red-700 border-red-700 rounded-sm p-2 text-xl text-center mt-2 duration-100 font-abc">
          Please Select Quantity
        </p>
      </div>
      {/* // stock check  */}

      {stock ==="false" && (
        <div className="text-white bg-red-500 font-mont font-semibold text-center mt-4 p-2 tracking-wide">
          Stock Out...
        </div>
      )}

      {stock === "true" && (
        <div>
          {/* // quantity start */}
          <div className="lg:mt-11 mt-10">
            <div className="flex flex-row items-center justify-between">
              <p className=" font-semibold text-base leading-4 text-gray-600 dark:text-gray-200 font-abc">
                {"Select quantity".toUpperCase()}
              </p>
              <div className="flex">
                <span
                  onClick={minusCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border text-2xl dark:bg-gray-600 border-gray-300 border-r-0 w-10 h-10 flex items-center justify-center pb-1"
                >
                  -
                </span>
                <input
                  id="counter"
                  aria-label="input"
                  className="border text-black text-xl font-semibold border-gray-300 text-center w-14 pb-2 h-10"
                  type="text"
                  value={count}
                  onChange={(e) => e.target.value}
                />
                <span
                  onClick={addCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-2xl dark:bg-gray-600 border border-gray-300 border-l-0 w-10 h-10 flex items-center justify-center pb-1 "
                >
                  +
                </span>
              </div>
            </div>
          </div>
          {/* // quantity end  */}
          <Link to="/">
            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-700 w-full py-4 lg:mt-4 mt-2">
              Buy More
            </button>
          </Link>
          <button
            className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-4 lg:mt-4 mt-2"
            onClick={handlePurchase}
          >
            Go For Payment
          </button>
          <hr className="h-1 my-2 bg-gray-700 border-0 rounded dark:bg-gray-700" />
        </div>
      )}
      {/* // stock check end  */}

      <div
        className=" leading-6 text-gray-600 mt-7 dark:text-gray-400 font-normal text-sm font-mont"
        dangerouslySetInnerHTML={{ __html: shortDescription }}
      ></div>
      <hr className=" bg-gray-200 w-full mt-4" />
    </div>
  );
};

export default DetailsContent;
