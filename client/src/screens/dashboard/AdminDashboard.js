import React from "react";
import Wrapper from "./Wrapper";
import { FaProductHunt } from "react-icons/fa";
import { BsBag, BsListStars } from "react-icons/bs";
import { TbBrandSvelte } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { BsCashCoin,BsBagCheck ,BsBagDash,BsBagPlus} from "react-icons/bs";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../store/services/productService";
import { useGetQuery } from "../../store/services/categoryService";
import { useGetBrandsQuery } from "../../store/services/brandService";
import { useGetfeedbackQuery } from "../../store/services/feedbackService";
import Spinner from "../../components/Spinner";
import { useGetOrdersQuery } from "../../store/services/orderService";
import { useGetAuthQuery, useGetCustomerQuery } from "../../store/services/authService";
const AdminDashboard = () => {
  const {data,isFetching} = useGetProductsQuery(1);
  const {data:category,isFetching:fetching} = useGetQuery(1)
  const {data:brand,isFetching:fetch}= useGetBrandsQuery(1)
  const {data:feedback, isFetching:fe} = useGetfeedbackQuery(1);
  const { data:order, isFetching:fet } = useGetOrdersQuery(1);
  const {data:customer, isFetching:f} = useGetCustomerQuery(1);
  const {data:admin, isFetching:fetchi} = useGetAuthQuery(1);
  console.log("Data",customer?.count);
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-center lg:w-full h-full ">
        <div className="flex flex-wrap   w-full h-[150px]  ">
          <div className=" p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!isFetching ? data?.count : <Spinner/>}
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
          <div className=" p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                 {!fetching ? category?.count : <Spinner/>}
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
          <div className=" p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fetch ? brand?.count : <Spinner/>}
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
          <div className="p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-black rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fe ?  feedback?.count : <Spinner/>}
                </h3>
                <VscFeedback
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                 Feedback
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-[150px] h-[960px]  flex flex-col sm:flex-row w-full  lg:mt-3 xl:h-[450px] mt-3   ">
          <div className="w-full   flex flex-wrap   h-[450px] sm:w-6/12 lg:w-6/12 xl:w-6/12 ">
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!f ? customer?.count : <Spinner/>}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fetchi ? admin?.count : <Spinner/> }
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <BsCashCoin
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Cash
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fet ? order?.count : <Spinner/>}
                </h3>
                
                <BsBagPlus
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                orders
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <BsBagCheck
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Receive Orders
              </h3>
                </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12" >
                <div className="w-full h-full rounded-lg bg-black">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  30
                </h3>
                <BsBagDash
                  size={80}
                  className=" relative top-2  xl:top-4 right-2"
                />
              </div>
              <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                Pending Orders
              </h3>
                </div>
            </div>
          </div>
          <div className="w-full h-[800px] sm:w-full  xl:h-[450px]   p-2    flex justify-center items-center  h-full sm:w-6/12 lg:w-6/12 xl:w-6/12 ">
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
