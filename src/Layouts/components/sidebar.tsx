import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-40" : "w-60 "
        } flex flex-col h-screen p-3 bg-white shadow-sm duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <svg
              width="109"
              height="31"
              viewBox="0 0 109 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="2.0752"
                width="26.914"
                height="26.85"
                rx="6"
                fill="#A162F7"
              />
              <path
                d="M9.1273 21.7072L10.8492 19.9853C6.48698 17.345 7.21403 13.3367 8.12284 11.6626L13.5039 16.9002L18.885 11.6626C20.9513 16.1396 17.8805 19.0287 16.0868 19.9136L17.9523 21.7072C24.6248 16.6849 21.3961 9.94063 18.885 8.0752L13.5039 13.4563L7.97934 8.0752C2.09602 13.815 6.25741 20.2723 9.1273 21.7072Z"
                fill="white"
              />
              <path
                d="M40.5461 24V7.2H44.1941L49.5461 17.856L54.8261 7.2H58.4741V24H55.4021V12.408L50.7221 21.6H48.2981L43.6181 12.408V24H40.5461ZM67.3736 24.288C66.2216 24.288 65.1816 24.024 64.2536 23.496C63.3416 22.968 62.6136 22.24 62.0696 21.312C61.5416 20.368 61.2776 19.28 61.2776 18.048C61.2776 16.816 61.5496 15.736 62.0936 14.808C62.6376 13.864 63.3656 13.128 64.2776 12.6C65.2056 12.072 66.2456 11.808 67.3976 11.808C68.5336 11.808 69.5576 12.072 70.4696 12.6C71.3976 13.128 72.1256 13.864 72.6536 14.808C73.1976 15.736 73.4696 16.816 73.4696 18.048C73.4696 19.28 73.1976 20.368 72.6536 21.312C72.1256 22.24 71.3976 22.968 70.4696 23.496C69.5416 24.024 68.5096 24.288 67.3736 24.288ZM67.3736 21.624C68.1736 21.624 68.8696 21.328 69.4616 20.736C70.0536 20.128 70.3496 19.232 70.3496 18.048C70.3496 16.864 70.0536 15.976 69.4616 15.384C68.8696 14.776 68.1816 14.472 67.3976 14.472C66.5816 14.472 65.8776 14.776 65.2856 15.384C64.7096 15.976 64.4216 16.864 64.4216 18.048C64.4216 19.232 64.7096 20.128 65.2856 20.736C65.8776 21.328 66.5736 21.624 67.3736 21.624ZM81.0515 24C79.8035 24 78.8035 23.696 78.0515 23.088C77.2995 22.48 76.9235 21.4 76.9235 19.848V14.664H74.8835V12.096H76.9235L77.2835 8.904H79.9955V12.096H83.2115V14.664H79.9955V19.872C79.9955 20.448 80.1155 20.848 80.3555 21.072C80.6115 21.28 81.0435 21.384 81.6515 21.384H83.1395V24H81.0515ZM87.5051 10.248C86.9451 10.248 86.4811 10.08 86.1131 9.744C85.7611 9.408 85.5851 8.984 85.5851 8.472C85.5851 7.96 85.7611 7.544 86.1131 7.224C86.4811 6.888 86.9451 6.72 87.5051 6.72C88.0651 6.72 88.5211 6.888 88.8731 7.224C89.2411 7.544 89.4251 7.96 89.4251 8.472C89.4251 8.984 89.2411 9.408 88.8731 9.744C88.5211 10.08 88.0651 10.248 87.5051 10.248ZM85.9691 24V12.096H89.0411V24H85.9691ZM95.4635 24L91.0955 12.096H94.3115L97.3355 21.096L100.36 12.096H103.576L99.1835 24H95.4635ZM105.872 24.168C105.312 24.168 104.848 23.992 104.48 23.64C104.128 23.288 103.952 22.864 103.952 22.368C103.952 21.856 104.128 21.424 104.48 21.072C104.848 20.72 105.312 20.544 105.872 20.544C106.432 20.544 106.888 20.72 107.24 21.072C107.608 21.424 107.792 21.856 107.792 22.368C107.792 22.864 107.608 23.288 107.24 23.64C106.888 23.992 106.432 24.168 105.872 24.168Z"
                fill="#1F2128"
              />
            </svg>
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              ></button>
            </span>
          </div>
          <div className="flex-1">
            <ul className="py-4 pb-4 ps-2 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-dark">Home</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-dark">Inbox</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="text-dark">Orders</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-dark">Settings</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-dark">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
