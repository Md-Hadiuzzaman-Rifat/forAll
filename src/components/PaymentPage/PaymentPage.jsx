/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import bkash from "../../assets/bkash.png";
import nagad from "../../assets/nagad.png";
import {useLocation, useNavigate} from 'react-router-dom';

const PaymentPage = () => {
  const [phone, setPhone] = useState("");
  const [transId, setTransId] = useState("");
  const location = useLocation();
  const { insertedId }= location?.state?.successData ||{}
  const payment= {id:insertedId ,phone, transId}
  const [successData, setSuccessData]= useState("")
  const navigate= useNavigate()

  console.log(insertedId);
  const handlePayment=async(e)=>{
    e.preventDefault()
    fetch(`${import.meta.env.VITE_ROOT_API}/editPayment`,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment)
    })
    .then(res=>res.json())
    .then(data=>setSuccessData(data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    if(successData){
      navigate('/orderSuccess')
    }
  },[successData, navigate])


  return (
    <div className="container min-h-screen">
      <h1 className="text-center font-bold md:text-6xl p-4 mb-8 text-4xl"><span className="text-pink-600">Make </span><span className="text-orange-600">Payment</span></h1>
      <div className="grid gap-8 sm:gap-16 grid-cols-1 lg:grid-cols-2">
        {/* // for bkash  */}
        <div className="max-w-[450px] border-l-2 border-pink-500 p-4" >
          <img className="mb-16 w-[70%] " src={bkash} alt="" />
          <form className="flex flex-col gap-4" onSubmit={handlePayment}>
            <input
              type="tel"
              onChange={e=>setPhone(e.target.value)}
              name="phone-number"
              id="bkash"
              autoComplete="tel"
              placeholder="01*********"
              className="block w-full tracking-wider 		 rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
            />
            <input type="text" placeholder="Transaction Id:" className="block w-full tracking-wider	 rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
            onChange={e=>setTransId(e.target.value)}
            />
            <button type="submit" className=" bg-pink-600 text-white rounded-md p-2 font-semibold">Submit</button>
          </form>
        </div>



        {/* for nagad  */}
        <div className="max-w-[450px] border-l-2 border-orange-500 p-4">
          <img className="mb-16 w-[60%]" src={nagad} alt="" />
          <form className="flex flex-col gap-4" onSubmit={handlePayment}>
            <input
              type="tel"
              name="phone-number"
              id="nagad"
              autoComplete="tel"
              placeholder="01*********"
              className="block w-full tracking-wider rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
              onChange={e=>setPhone(e.target.value)}
            />
            <input type="text" placeholder="Transaction Id:" className="block w-full tracking-wider rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"onChange={e=>setTransId(e.target.value)}/>
            <button type="submit" className="text-bold bg-orange-500 text-white p-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
