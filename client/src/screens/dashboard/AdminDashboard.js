import React from "react";
import Wrapper from "./Wrapper";
import { FaProductHunt } from "react-icons/fa";
import { BsListStars } from "react-icons/bs";
import { TbBrandSvelte } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-center lg:w-full h-full   border-2">
        <div className="flex flex-wrap bg-red-500  w-full h-[150px] border-2 ">
          <div className="bg-green-500 p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FaProductHunt
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Product
              </h3>
            </div>
          </div>
          <div className="bg-green-500 p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <BsListStars
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Categories
              </h3>
            </div>
          </div>
          <div className="bg-green-500 p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <TbBrandSvelte
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Brands
              </h3>
            </div>
          </div>
          <div className="bg-green-500 p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FiShoppingBag
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Orders
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-[150px] h-[960px]  flex flex-col sm:flex-row bg-red-500 w-full  lg:mt-3 xl:h-[760px] mt-3  border-2 ">
          <div className="bg-green-800  w-full   flex flex-wrap   h-[450px] sm:w-6/12 lg:w-6/12 xl:w-6/12 ">
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <HiOutlineUsers
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Customers
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <RiAdminLine
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Admins
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FaProductHunt
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Product
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FaProductHunt
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Product
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FaProductHunt
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Product
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 border-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <FaProductHunt
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Total Product
              </h3>
                </div>
            </div>
          </div>
          <div className="bg-green-500 w-full h-[800px] sm:w-full  xl:h-[760px]   p-2    flex justify-center items-center  h-full sm:w-6/12 lg:w-6/12 xl:w-6/12 ">
            <div className="w-full  h-full bg-black rounded-lg">
              <ScreenHeader>
                <button  className="btn-dark rounded-xl ml-3">Delivery Boys List
                </button>
              </ScreenHeader>

            </div>
          </div>
          
         
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminDashboard;
