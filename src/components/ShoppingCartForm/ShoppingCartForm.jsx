// const ShoppingCartForm = () => {
//   return (
//     <div className=" col-span-12 xl:col-span-4 dark:bg-gray-700 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
//       <h2 className="font-manrope font-bold text-3xl leading-10 text-black dark:text-gray-200 pb-8 border-b border-gray-300">
//         Order Summary
//       </h2>
//       <div className="mt-8">
//         <div className="flex items-center justify-between pb-6">
//           <p className="font-normal text-lg leading-8 text-black dark:text-gray-400">
//             3 Items
//           </p>
//           <p className="font-medium text-lg leading-8 text-black dark:text-gray-200">
//             $480.00
//           </p>
//         </div>
//         <form>
//           <label className="flex  items-center mb-1.5 text-gray-600 dark:text-gray-400 text-sm font-medium">
//             Shipping
//           </label>
//           <div className="flex pb-6">
//             <div className="relative w-full">
//               <div className=" absolute left-0 top-0 py-3 px-4">
//                 <span className="font-normal text-base text-gray-300">
//                   Second Delivery
//                 </span>
//               </div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
//                 placeholder="$5.00"
//               />
//               <button
//                 id="dropdown-button"
//                 data-target="dropdown-delivery"
//                 className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
//                 type="button"
//               >
//                 <svg
//                   className="ml-2 my-auto"
//                   width="12"
//                   height="7"
//                   viewBox="0 0 12 7"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
//                     stroke="#6B7280"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                 </svg>
//               </button>
//               <div
//                 id="dropdown-delivery"
//                 aria-labelledby="dropdown-delivery"
//                 className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="dropdown-button"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Shopping
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Images
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       News
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Finance
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* // single input item  */}

//           {/* <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
//                 </label>
//                 <div className="flex pb-4 w-full">
//                     <div className="relative w-full ">
//                         <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">
//                         </div>
//                         <input type="text"
//                             className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//                             placeholder="xxxx xxxx xxxx"/>
//                         <button id="dropdown-button" data-target="dropdown"
//                             className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
//                             type="button"><svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
//                                 fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
//                                     stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"
//                                     strokeLinejoin="round"></path>
//                             </svg>
//                         </button>
//                         <div id="dropdown"
//                             className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//                             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                                 aria-labelledby="dropdown-button">
//                                 <li>
//                                     <a href="#"
//                                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
//                                 </li>
//                                 <li>
//                                     <a href="#"
//                                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
//                                 </li>
//                                 <li>
//                                     <a href="#"
//                                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
//                                 </li>
//                                 <li>
//                                     <a href="#"
//                                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div> */}

//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//             Full Name
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>


          
//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//                 Email
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>


//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//             Phone Number
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>


//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//             Address
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>


//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//             City
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>


//           <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
//             Zip Code
//           </label>
//           <div className="flex pb-4 w-full">
//             <div className="relative w-full ">
//               <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
//               <input
//                 type="text"
//                 className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
//               />
//             </div>
//           </div>




//           <div className="flex items-center border-b border-gray-200">
//             <button className="rounded-full w-full bg-black py-3 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 dark:bg-gray-400 hover:bg-black/80">
//               Apply
//             </button>
//           </div>
//           <div className="flex items-center justify-between py-8">
//             <p className="font-medium text-xl leading-8 text-black dark:text-gray-200">
//               3 Items
//             </p>
//             <p className="font-semibold text-xl leading-8 text-indigo-600 dark:text-indigo-400">
//               $485.00
//             </p>
//           </div>
//           <button className="w-full text-center bg-indigo-600 rounded-full py-4 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
//             Checkout
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCartForm;








// <!-- Modal toggle -->
// <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//   Toggle modal
// </button>

// <!-- Main modal -->


const ShoppingCartForm = () => {
  return (
    <div>
      

<div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
   
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
</div>
  );
};

export default ShoppingCartForm;