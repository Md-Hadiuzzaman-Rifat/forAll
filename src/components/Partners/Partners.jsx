
import { MdForwardToInbox } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Partners = () => {
  return (
    <div className=" text-gray-200 bg-[#37383F]">
      <div className="flex flex-col items-center lg:flex-row container py-16 lg:py-20 w-full lg:justify-between lg:gap-24 gap-12">
        <div className="lg:flex-1 w-full">
          <p className="flex flex-row items-center text-gray-200 font-bold tracking-wider text-xl">
            <MdForwardToInbox className="m-2 text-orange-400 text-3xl"></MdForwardToInbox>
            <span>GET SPECIAL DISCOUNTS IN YOUR INBOX</span>
          </p>
          <div className="flex w-full">

            <span className="w-full border-white mx-2 border-b-2 m-0 p-0">
              <input
                className="appearance-none text-lg  bg-transparent border-none w-full mt-3 text-white  p-0 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter email to get offers, discount and more."
                aria-label="Full name"
              />
            </span>

            <button className="bg-orange-400 px-4 py-2 hover:bg-orange-300 text-md font-semibold text-white tracking-wide">
              Subscribe
            </button>
          </div>
        </div>

        <div className="lg:flex-1 w-full">
          <p className="flex flex-row items-center">
            {" "}
            <FaPhoneAlt className="m-2 text-xl text-orange-500"></FaPhoneAlt>{" "}
            <span className="text-gray-200 font-bold tracking-wider text-xl">
              FOR ANY HELP YOU MAY CALL US AT
            </span>
          </p>
          <p className="text-gray-400 ml-12 text-md mt-2">+8801648141727</p>
          <p className="text-gray-400 ml-12 text-md">Open 24 Hours a Day, 7 Days a week</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
