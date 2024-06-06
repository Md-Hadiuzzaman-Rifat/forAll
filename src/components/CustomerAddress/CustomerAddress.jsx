/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { usePurchaseOrderMutation } from "../../features/confirmOrder/confirmOrder";
import { useNavigate } from "react-router-dom";
import { Radio } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { orderFormClose } from "../../features/cartHandler/cartHandler";
import { clearCart, getTotals } from "../../features/cartSlice/cartSlice";

export default function CustomerAddress({orderedItem}) {
  const {formCondition}= useSelector(state=>state.cartHandler)

  const dispatch= useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("osd");
  const [receivedData, setReceivedData]= useState({})


  const cart = useSelector((state) => state.cart);
  const [purchaseOrder,{data:successData ,isSuccess:successPurchase  ,isLoading:purchaseLoading}]= usePurchaseOrderMutation()

  const navigate= useNavigate()
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

const data={name, email, phone, address, division}
const orderStatus={name, phone ,email, address, division, orderedItem, date:new Date().toLocaleString(), total: cart?.cartTotalAmount, status:"pending" }

  const handleAddress=(e)=>{
    e.preventDefault()

    // create client 
    fetch(`${import.meta.env.VITE_ROOT_API}/addClient`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    })
    .then(res=>res.json())
    .catch(err=>console.log(err+" Failed from create client"))
    // // // create order 
    purchaseOrder(orderStatus)
  }
  
 
  useEffect(()=>{
    if(successPurchase && successData){
      setReceivedData(successData)
      dispatch(orderFormClose())
      dispatch(clearCart())
      navigate('/paymentPage', {state:{successData, division}})
    }
  },[successPurchase,successData,receivedData, division , dispatch ,navigate])

  return (
    <div className="isolate bg-white px-6  lg:px-8 ">
      {
        purchaseLoading && <Radio
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      }
      <form
        onSubmit={handleAddress}
        method="POST"
        className="mx-auto  max-w-xl flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Full Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="given-name"
              required
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-6 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>Ban</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              required
              onChange={(e) => setPhone(e.target.value)}
              className="block  w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* // inside or outside dhaka  */}

        <div className="border my-4 p-4 rounded-md">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Shipping Address</p>
            <label>
              <input
                onChange={(e) =>setDivision(e.target.value)}
                type="radio"
                checked={division === "isd"}
                name="myRadio"
                value="isd"
              />{" "}
              Dhaka
            </label>

            <label>
              <input
                 onChange={(e) =>setDivision(e.target.value)}
                type="radio"
                name="myRadio"
                checked={division === "osd"}
                value="osd"
              />{" "}
              Outside Dhaka
            </label>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-6"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}
