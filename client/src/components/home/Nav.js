import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { searchBar } = useSelector((state) => state.globalReducer);
  const { items, total } = useSelector((state) => state.cartReducer);
  console.log("c",total);
  const dispatch = useDispatch();
  return (
    <div  className="relative z-20 w-full h-16 sm:h-20 lg:h-24">
      <div className="fixed z-20 w-full shadow-md   h-16 px-4 text-gray-700   bg-white   sm:h-20 lg:h-24 md:px-8 lg:px-6">
        <div className="justify-between  xl:justify-center items-center  flex mx-auto max-w-[1920px] h-full w-full">
          <Link to="/">
            <img src="/logo.jpg" className="h-16 object-cover sm:h-20 lg:h-24 mr-10 " alt="logo" />
          </Link>
          <Menu />
          <div className=" flex items-center">
            <div className="nav-li cursor-pointer">
            <FiSearch size={23} onClick={() => dispatch(toggleSearchBar())} />
            </div><Search/>
            <div className="hidden sm:hidden ml-8  md:hidden ml-8 lg:block ml-8 xl:block ml-8 relative ">
                <Link to="/cart" >
                  <BsHandbag size={20} />
                  <span className="nav-circle sm:nav-circle md:nav-circle lg:nav-circle">{items}</span>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
