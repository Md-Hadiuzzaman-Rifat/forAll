/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PiPhoneCallLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useGetCategoryQuery } from "../../features/category/categoryApi";
import { FaFacebookSquare } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar3() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading } = useGetCategoryQuery();

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass("fixed top-0 left-0 z-50 shadow-lg")
        : setStickyClass("relative");
    }
  };
  const navigateCategory = (url) => {
    navigate(url);
    setOpen(false);
    console.log(open);
    console.log(typeof open);
  };

  return (
    <div className="relative">
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 " onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {isLoading && "sorry for loading..."}

                  <Tab.Group as="div" className="mt-2">
                    <Tab.Panels as={Fragment}>
                      <Tab.Panel className="space-y-10 px-4 pb-8 pt-10">
                        {/* // for image start  */}
                        <div className="grid grid-cols-2 gap-x-4">
                          {data?.map((item) => (
                            <div
                              key={item?._id}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={`${
                                    import.meta.env.VITE_ROOT_API
                                  }/Images/${item?.image}`}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>

                        {data?.map((item) => (
                          <li key={item?._id} className="flow-root">
                            <span
                              className=" cursor-pointer"
                              onClick={() =>
                                navigateCategory(`category/${item?.category}`)
                              }
                            >
                              {item?.category?.toUpperCase()}
                            </span>
                          </li>
                        ))}
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                  {/* // work end now  */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over 5,000 Taka
          </p>
          {/* // static navbar  */}
          <div className={`${stickyClass} w-full`}>
            <nav
              aria-label="Top"
              className={`  bg-white mx-auto px-4 sm:px-6 lg:px-8 bg-opacity-95`}
            >
              {/* fixed top-10 left-0 right-0 z-50 */}
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <button
                    type="button"
                    className="relative rounded-md bg-white p-2 text-gray-400 "
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Logo */}
                  <div className="ml-4 flex lg:ml-0">
                    <Link to="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto lg:ml-4"
                        src={import.meta.env.VITE_LOGO}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="ml-auto flex items-center">
                    {/* Contact */}
                    <div className="flex lg:ml-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                      <a
                        href={`tel:{+88${import.meta.env.VITE_PHONE}}`}
                        className="flex items-center gap-2"
                      >
                        <PiPhoneCallLight className=" mb-1  text-gray-400 " />{" "}
                        <span className="text-gray-400 font-abc">
                          +88 {import.meta.env.VITE_PHONE}
                        </span>
                      </a>
                    </div>

                    {/* Cart */}

                    {/* <div
                      className="ml-4 flow-root lg:ml-6"
                      onClick={() => navigate("/shoppingCart")}
                    >
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span> 
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div> */}

                    <div className="ml-2 text-xl text-gray-400 cursor-pointer">
                      <a
                        href={`${import.meta.env.VITE_FACEBOOK}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaFacebookSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
