/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetCategoryQuery } from "../../../features/category/categoryApi";
import axios from "axios";
import TextArea from "../../components/TextArea/TextArea";
import { useGetSubCategoryQuery } from "../../../features/subCategory/subCategoryApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation } from "../../../features/product/productApi";

export default function EditForm({ data }) {

  // get Category
  const {
    data: getCatData,
    isSuccess: getCatSuccess,
    isError,
  } = useGetCategoryQuery();
  // get Subcategory
  const {
    data: getSubCatData,
    isSuccess: getSubCatSuccess,
    isLoading: subCatLoading,
  } = useGetSubCategoryQuery();

  const {
    brand: eBrand,
    category: eCategory,
    description: eDescription,
    discount: eDiscount,
    extra: eExtra,
    extraInfo: eExtraInfo,
    subcategory: eSubcategory,
    otherLink: eOtherLink,
    price: ePrice,
    productName: eProductName,
    review: eReview,
    variants: eVariants,
    videoLink: eVideoLink,
    shortDescription: eShortDescription,
    stock:eStock
  } = data?.description || {};


  const [productName, setProductName] = useState(eProductName);
  const [review, setReview] = useState(eReview);
  const [price, setPrice] = useState(ePrice);
  const [videoLink, setVideoLink] = useState(eVideoLink);
  const [otherLink, setOtherLink] = useState(eOtherLink);
  const [category, setCategory] = useState(eCategory);
  const [subcategory, setSubcategory] = useState(eSubcategory || []);
  const [shortDescription, setShortDescription] = useState(eShortDescription);
  const [description, setDescription] = useState(eDescription);
  const [variants, setVariants] = useState(eVariants);
  const [discount, setDiscount] = useState(eDiscount);
  const [extra, setExtra] = useState(eExtra);
  const [extraInfo, setExtraInfo] = useState(eExtraInfo);
  const [brand, setBrand] = useState(eBrand);
  const [stock, setStock]= useState(Boolean(eStock))

  const {id}= useParams()
  const navigate= useNavigate()


  const details = {
    productName,
    brand,
    review,
    price,
    videoLink,
    otherLink,
    category,
    description,
    variants,
    shortDescription,
    subcategory,
    discount,
    extra,
    extraInfo,
    stock
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setSubcategory([...subcategory, e.target.value]);
    } else {
      setSubcategory(subcategory.filter((item) => item !== e.target.value));
    }
  };

  const [editProduct, {isSuccess}]=useEditProductMutation()

  const handleUpload = async (e) => {
    e.preventDefault();
    editProduct({productId:id, productObj:{description: details, images:data?.images}})
  };

   useEffect(()=>{
    if(isSuccess){
      navigate('/dashboard/allProducts')
      alert("Edited Successfully")
    }
   },[isSuccess, navigate])
  
  return (
    <div>
      <form className="container" onSubmit={handleUpload}>
        <h1 className="text-center font-bold text-2xl md:text-4xl mt-4 bg-orange-500 p-2 text-gray-100">
          Edit Product
        </h1>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    name="product-name"
                    id="product-name"
                    autoComplete="given-name"
                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Review
                </label>
                <div className="mt-2">
                  <input
                    value={review}
                    min="1"
                    max="5"
                    onChange={(e) => setReview(e.target.value)}
                    type="number"
                    name="review"
                    id="review"
                    autoComplete="family-name"
                    className="block  px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="Regular Price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Regular Price
                </label>
                <div className="mt-2">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="family-name"
                    className="block  px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="Regular Price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Discount Price
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setDiscount(e.target.value)}
                    value={discount}
                    type="text"
                    name="discount"
                    id="discount"
                    autoComplete="family-name"
                    className="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              

                                          {/* // for stock */}
            <div className="sm:col-span-3">
              <label
                htmlFor="stock"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Stock Available
              </label>
              <div className="mt-2">
                <select
                  required
                  id="stock"
                  name="stock"
                  autoComplete="stock"
                  
                  onChange={(e) => setStock(!e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={true}>Available</option>
                  <option value={false}>Not Available</option>
                </select>
              </div>
            </div>
            {/* // stock end  */}

              {/* // short Description  */}
              <div className="col-span-full mb-4">
                <label
                  htmlFor="shortDescription"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Short Description
                </label>

                {/* // text area  */}
                <TextArea
                  shortDescription={shortDescription}
                  setShortDescription={setShortDescription}
                ></TextArea>
              </div>

              {/* // short description end   */}

              
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    required
                    id="category"
                    name="category"
                    autoComplete="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    
                    {getCatSuccess &&
                      getCatData?.length > 0 &&
                      getCatData.map((item) => (
                        <option key={item._id} value={item.category}>
                          {item.category}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
                      <div className="flex col-span-full gap-2 text-base">
              <p className="font-semibold">Selected Category: </p>
              <p className=" text-red-500">{category}</p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="subcategory"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <p className="underline mb-4">Subcategory</p>
                </label>
                {/* // subcategory data  */}
                {subCatLoading && "Sorry For Loading"}
                {!subCatLoading &&
                  getSubCatSuccess &&
                  getSubCatData?.length > 0 && (
                    <div className="text-sm">
                      {getSubCatData.map((item) => (
                        <div key={item._id}>
                          <input
                            className="font-thin rounded-full text-sm"
                            onChange={handleChange}
                            value={item.name}
                            checked={subcategory.includes(item.name)}
                            type="checkbox"
                          />{" "}
                          <span>{item.name?.toUpperCase()}</span>
                        </div>
                      ))}
                    </div>
                  )}
              </div>

              {/* // selected category  */}
              <p className="font-semibold col-span-full text-base mb-[-20px]">Selected Subcategory: </p>
              <p className="col-span-full">[{
                  subcategory?.map((item, index)=> <span className="text-red-500" key={index}>{` ${item } ,  `} </span> )
                }]</p>

              {/* // full Description  */}
              <div className="col-span-full mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                {/* // text area  */}
                <TextArea
                  description={description}
                  setDescription={setDescription}
                ></TextArea>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand Name
                </label>
                <div className="mt-2">
                  <input
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    type="text"
                    name="brand"
                    id="brand"
                    className="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Video Link
                </label>
                <div className="mt-2">
                  <input
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    type="text"
                    name="video"
                    id="video"
                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="Other Link"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Other links
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setOtherLink(e.target.value)}
                    value={otherLink}
                    type="text"
                    name="otherLink"
                    id="otherLink"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="Available Size or Color">Color or Size</label>
            <input
              onChange={(e) => setExtraInfo(e.target.value)}
              placeholder="Color / Size"
              type="text"
              value={extraInfo}
              name="otherLink"
              id="otherLink"
              className="block px-4 mb-4 w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <label htmlFor="Color or Size Properties">
              Color or Size properties
            </label>
            <input
              onChange={(e) => setExtra(e.target.value)}
              placeholder="S, M, L, XL, XXL"
              value={extra}
              type="text"
              name="otherLink"
              id="otherLink"
              className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
