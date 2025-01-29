

import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLockClosedSharp } from "react-icons/io5";
import Partners from "../Partners/Partners"
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaTruck } from "react-icons/fa6";


const FooterBanner = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] py-8">
      <div className="flex flex-col items-center container lg:flex-row lg:justify-between lg:items-start gap-4">


        <div className="flex flex-col items-center flex-1">
          <IoLockClosedSharp className="text-3xl"></IoLockClosedSharp>
          <p className="font-semibold text-xl mb-4">All secure payment methods</p>
          <img src="/sslcommerz.png" alt="" />
        </div>

        <div className="flex flex-col items-center flex-1">
        <HiOutlineEmojiHappy  className="text-3xl"/>
          <p className="text-xl font-semibold  mb-4">Satisfaction guaranteed</p>
          <p>Made with premium quality material</p>
          <p className="text-sm font-bold">Cozy yet lasts the test of time</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <FaTruck className="text-3xl"></FaTruck>
          <p className="text-xl font-semibold  mb-4">Worldwide delivery</p>
          <img src="/delivery.png" alt="" />
        </div>


      </div>
      </div>
      

      {/* // middle section  */}
      <Partners></Partners>

      <div className="bg-[#58595B]">
        <div className="container py-16 flex justify-between gap-4 flex-wrap text-gray-200">
          <div className="">
            <p className="text-orange-400 text-xl tracking-wider font-bold mb-6">
              FlexFit 27
            </p>
            <div className="flex flex-col gap-[6px]">
              <p>ABOUT US</p>
              <p>TERMS &amp; CONDITION</p>
              <p>PRIVACY POLICY</p>
              <p>CANCELLATION &amp; RETURN POLICY</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="">
            <p className="400 mb-6 text-xl tracking-wider font-bold">MAN</p>
            <div className="flex flex-col gap-[6px]">
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/cargo pants"
              >
                CARGO PANTS
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/trouser"
              >
                TROUSER
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/jersey"
              >
                JERSEY
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/drop shoulder"
              >
                DROP SHOULDER
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/t-shirt"
              >
                T-SHIRT
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/hoodie "
              >
                HOODIE
              </Link>
            </div>
          </div>
          <div className="">
            <p className="400 mb-6 text-xl tracking-wider font-bold">WOMEN</p>
            <div className="flex flex-col gap-[6px]">
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/trouser"
              >
                TROUSER
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/drop shoulder"
              >
                DROP SHOULDER
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/hoodie"
              >
                HOODIE
              </Link>
              <Link
                className="hover:text-orange-300 text-sm duration-100 hover:ml-1"
                to="/category/t-shirt"
              >
                T-SHIRT
              </Link>
            </div>
          </div>

          <div className="">
            <p className="400 mb-6 text-xl tracking-wider font-bold">FIND US</p>
            <div className="flex flex-col gap-[6px] text-sm">
              <p className="font-bold">Shop Address</p>
              <p>Mirpur Benarashi Palli</p>
              <p>Block: A, Lane: 8, House no: 18</p>
              {/* // social icon  */}

              <p className="flex gap-4 text-2xl mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/urbanregionbd/"
                >
                  <FaFacebookSquare></FaFacebookSquare>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@urbanregionbd"
                >
                  <IoLogoYoutube></IoLogoYoutube>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/urbanregionbd/"
                >
                  <FaSquareInstagram></FaSquareInstagram>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-gray-200">
        <div className="container text-sm  max-w-[85%] text-center">
          <p>
            FlexFit 27 prints a huge variety of custom clothing like T-shirts,
            hoodies and more. Your order is handled daily with a lot of ❤️️ from
            BANGLADESH and delivered worldwide!
          </p>
          <br />
          <p>Copyright © 2020 FlexFit 27 BD. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
