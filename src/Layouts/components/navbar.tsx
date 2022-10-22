import React, { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import profile from "../../Assets/Images/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.svg";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden  sm:block">
                  <div className="flex space-x-4  items-center">
                    <div>
                      <form className="max-w-sm px-1">
                        <div className="relative search-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1999 13.449V9.62358C17.1982 7.91915 16.5948 6.27033 15.4966 4.9691C14.3985 3.66788 12.8764 2.79823 11.1999 2.51416V1.20295C11.1999 0.883906 11.0735 0.577931 10.8484 0.352335C10.6234 0.126739 10.3182 0 9.9999 0C9.68164 0 9.37642 0.126739 9.15137 0.352335C8.92633 0.577931 8.7999 0.883906 8.7999 1.20295V2.51416C7.12343 2.79823 5.60133 3.66788 4.50316 4.9691C3.405 6.27033 2.80163 7.91915 2.7999 9.62358V13.449C2.09964 13.6971 1.4931 14.1564 1.06343 14.7637C0.633757 15.371 0.40199 16.0967 0.399902 16.8413V19.2472C0.399902 19.5662 0.526331 19.8722 0.751374 20.0978C0.976418 20.3234 1.28164 20.4501 1.5999 20.4501H5.3679C5.64424 21.4694 6.2475 22.3693 7.08462 23.0109C7.92173 23.6524 8.94618 24 9.9999 24C11.0536 24 12.0781 23.6524 12.9152 23.0109C13.7523 22.3693 14.3556 21.4694 14.6319 20.4501H18.3999C18.7182 20.4501 19.0234 20.3234 19.2484 20.0978C19.4735 19.8722 19.5999 19.5662 19.5999 19.2472V16.8413C19.5978 16.0967 19.366 15.371 18.9364 14.7637C18.5067 14.1564 17.9002 13.6971 17.1999 13.449ZM5.1999 9.62358C5.1999 8.34741 5.70561 7.12351 6.60579 6.22113C7.50596 5.31874 8.72686 4.81179 9.9999 4.81179C11.2729 4.81179 12.4938 5.31874 13.394 6.22113C14.2942 7.12351 14.7999 8.34741 14.7999 9.62358V13.2324H5.1999V9.62358ZM9.9999 21.6531C9.58107 21.6505 9.17019 21.5381 8.8081 21.3271C8.44601 21.1161 8.14531 20.8137 7.9359 20.4501H12.0639C11.8545 20.8137 11.5538 21.1161 11.1917 21.3271C10.8296 21.5381 10.4187 21.6505 9.9999 21.6531ZM17.1999 18.0442H2.7999V16.8413C2.7999 16.5222 2.92633 16.2162 3.15137 15.9906C3.37642 15.7651 3.68164 15.6383 3.9999 15.6383H15.9999C16.3182 15.6383 16.6234 15.7651 16.8484 15.9906C17.0735 16.2162 17.1999 16.5222 17.1999 16.8413V18.0442Z"
                      fill="#7C7C8D"
                    />
                  </svg>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

        
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
