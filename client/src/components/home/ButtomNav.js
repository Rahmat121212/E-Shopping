import React from 'react'
import { Link } from 'react-router-dom'
import { BsHandbag } from "react-icons/bs";
import { useSelector } from 'react-redux';

const ButtomNav = ({openSidebar}) => {
  const { items, total } = useSelector((state) => state.cartReducer);
  return (
    <div className="lg:hidden fixed  z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4 md:px-8">
      <button
      onClick={openSidebar}
        aria-label="Menu"
        className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={14}
          viewBox="0 0 25.567 18"
        >
          <g transform="translate(-776 -462)">
            <rect
              id="Rectangle_941"
              data-name="Rectangle 941"
              width="12.749"
              height="2.499"
              rx="1.25"
              transform="translate(776 462)"
              fill="currentColor"
            />
            <rect
              id="Rectangle_942"
              data-name="Rectangle 942"
              width="25.567"
              height="2.499"
              rx="1.25"
              transform="translate(776 469.75)"
              fill="currentColor"
            />
            <rect
              id="Rectangle_943"
              data-name="Rectangle 943"
              width="17.972"
              height="2.499"
              rx="1.25"
              transform="translate(776 477.501)"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
      {/* <button
        className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        aria-label="search-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17px"
          height="18px"
          viewBox="0 0 18.942 20"
          className="md:w-4 xl:w-5 md:h-4 xl:h-5"
        >
          <path
            d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
            transform="translate(-367.297 -371.285)"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </button> */}
      <Link to="/" className="flex-shrink-0" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="20px"
          viewBox="0 0 17.996 20.442"
        >
          <path
            d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
            transform="translate(-30.619 0.236)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.4"
          />
        </svg>
      </Link>
      <ul className=" flex items-center">
            <li className=" lg:ml-8 xl:ml-8 relative ">
                <Link to="/cart">
                  <BsHandbag size={20} />
                  <span className="nav-circle">{items}</span>
                </Link>
              </li>
          </ul>
      <Link to="/login" className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="20px"
          viewBox="0 0 16.577 18.6"
        >
          <path
            d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
            transform="translate(7723.3 -2914.703)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>
      </Link>
    </div>

  )
}

export default ButtomNav