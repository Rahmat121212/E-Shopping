import React from 'react'
import { Link } from 'react-router-dom'
import { useAllCategoriesQuery } from '../../store/services/categoryService'
import { useAllBrandsQuery } from '../../store/services/brandService';
import { useSelector } from "react-redux";
const Menu = () => {
  const { data, isFetching } = useAllCategoriesQuery();
  const {data:brn,isFetching : isfetching} = useAllBrandsQuery();
  console.log("C", brn);
  const { userToken, user } = useSelector((state) => state.authReducer);

  return (
    <nav className="headerMenu flex w-[870px] relative hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
      <div className="menuItem group cursor-pointer py-7 ">
        <Link
          className="relative font-normal inline-flex items-center px-3 py-2 text-sm  xl:text-base text-heading xl:px-4 group-hover:text-black"
          to={"/"}
        >
          Home
        </Link>
      </div>
      <div className="menuItem group cursor-pointer py-7 relative">
        <div
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          
        >
          Categories
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </span>
        </div>
        {/* Menu Add */}

        <div className="absolute invisible bg-gray-100 ml-4  opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100" >
          {
            data?.categories?.length > 0 && data?.categories?.map((cat, index) => (
              <ul  key={index} className="text-sm font-normal text-body">
                <li className="group relative"  >
                  <Link to={`/cat-products/${cat.name}`} className="flex items-center font-normal px-5 py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300"
                    >
                    {cat.name}
                  </Link>
                </li>
              </ul>
            )) }
      </div>
    
    
      </div>
      <div className="menuItem group cursor-pointer py-7 relative">
        <div
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          
        >
          Top Brands
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </span>
        </div>
        {/* Menu Add */}
        <div className="absolute invisible bg-gray-100 ml-4  opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100">
         {
          brn?.brands?.length > 0 && brn?.brands?.map((br,index)=>(
            <ul key={index} className="text-sm font-serif text-body">
            <li className="group relative">
            <Link to={`/cat-productsBrand/${br.name}`} className="flex items-center font-normal px-5 py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300"
                    >
                    {br.name}
                  </Link>
            </li>
          </ul>
          ))
         }
        </div>
      </div>
      {/* Mune Add */}


      
      <div className="menuItem group cursor-pointer py-7 ">
        <Link
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
      <div className="menuItem group cursor-pointer py-7 ">
        <Link
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          to="/about"
        >
          About Us
        </Link>
      </div>
      {
        userToken ? <div className="menuItem group cursor-pointer py-7 ">
        <Link
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          to={"/login"}
        >
          {user.name}
        </Link>
      </div> : <div className="menuItem group cursor-pointer py-7 ">
        <Link
          className="relative  inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
          to={"/login"}
        >
          Sign In
        </Link>
      </div>
      }


    </nav>
  )
}

export default Menu
