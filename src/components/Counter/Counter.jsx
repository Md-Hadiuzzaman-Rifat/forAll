// import { useState } from "react";

// const Counter = () => {
//     const [rotate, setRotate] = useState(false);

//     const addCount = () => {
//         setCount((prev) => prev + 1);
//         addToDb(id)
//       };
    
//       const minusCount = () => {
//         if (count > 0) {
//           setCount((prev) => prev - 1);
//         }
//       };

//     return (
//         <div className="lg:mt-11 mt-10">
//         <div className="flex flex-row justify-between">
//           <p className=" font-medium text-base leading-4 text-gray-600 dark:text-gray-200">
//             Select quantity
//           </p>
//           <div className="flex">
//             <span
//               onClick={minusCount}
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border text-2xl dark:bg-gray-600 border-gray-300 border-r-0 w-10 h-10 flex items-center justify-center pb-1"
//             >
//               -
//             </span>
//             <input
//               id="counter"
//               aria-label="input"
//               className="border text-black text-xl font-semibold border-gray-300 h-full text-center w-14 pb-1"
//               type="text"
//               value={count}
//               onChange={(e) => e.target.value}
//             />
//             <span
//               onClick={addCount}
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-2xl dark:bg-gray-600 border border-gray-300 border-l-0 w-10 h-10 flex items-center justify-center pb-1 "
//             >
//               +
//             </span>
//           </div>
//         </div>
//         <hr className=" bg-gray-200 w-full my-2" />
//         <div className=" flex flex-row justify-between items-center mt-4">
//           <p className="font-medium text-base leading-4 text-gray-600">
//             Dimensions
//           </p>
//           <svg
//             onClick={() => setRotate(!rotate)}
//             id="rotateSVG"
//             className={
//               "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
//               (rotate ? "rotate-180" : "rotate-0")
//             }
//             width="10"
//             height="6"
//             viewBox="0 0 10 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9 1L5 5L1 1"
//               stroke="#4B5563"
//               strokeWidth="1.25"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <hr className=" bg-gray-200 w-full mt-4" />
//       </div>
//     );
// };

// export default Counter;