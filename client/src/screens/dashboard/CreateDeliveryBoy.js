import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { FaProductHunt } from "react-icons/fa";
import { BsBag, BsListStars } from "react-icons/bs";
import { TbBrandSvelte } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import { RiAdminLine } from "react-icons/ri";
import { BsCashCoin, BsBagCheck, BsBagDash, BsBagPlus,BsPerson } from "react-icons/bs";
import ScreenHeader from "../../components/ScreenHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/services/productService";
import { useGetQuery } from "../../store/services/categoryService";
import { useDeleteBrandMutation, useGetBrandsQuery } from "../../store/services/brandService";
import { useGetfeedbackQuery } from "../../store/services/feedbackService";
import Spinner from "../../components/Spinner";
import { useGetOrdersQuery } from "../../store/services/orderService";
import {
  useAuthRegisterMutation,
  useBoyRegisterMutation,
  useGetAuthQuery,
  useGetBoyQuery,
  useGetCustomerQuery,
} from "../../store/services/authService";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const CreateDeliveryBoy = () => {
  let {page} = useParams();
   if(!page) {
      page = 1;
   }
  const { data, isFetching } = useGetProductsQuery(1);
  const { data: category, isFetching: fetching } = useGetQuery(1);
  const { data: brand, isFetching: fetch } = useGetBrandsQuery(1);
  const { data: feedback, isFetching: fe } = useGetfeedbackQuery(1);
  const { data: order, isFetching: fet } = useGetOrdersQuery(1);
  const { data: customer, isFetching: f } = useGetCustomerQuery(1);
  const { data: admin, isFetching: fetchi } = useGetAuthQuery(1);
  const {data:data1 , isFetching:isf} = useGetBoyQuery(page);
//  create code
const [state, setState] = useState({
  name: "",
  email: "",
  contact: "",
  location: "",
});
const handleInput = (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};

const [login, response] = useBoyRegisterMutation();
const createPro = (e) => {
  e.preventDefault();
  login(state)
  console.log("SSS--->",state);
};
useEffect(() => {
  if (!response.isSuccess) {
    response?.error?.data?.errors.map((err) => {
      toast.error(err.msg);
    });
  }
}, [response?.error?.data?.errors]);
const dispatch = useDispatch();
const navigate = useNavigate();
useEffect(() => {
  if (response?.isSuccess) {
    
    navigate("/dashboard/dashboard");
  }
}, [response?.isSuccess]);

//  create code
   
 
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-center lg:w-full h-full ">
        <div className="flex flex-wrap   w-full h-[150px]  ">
          <div className=" p-2 w-[50%]  flex justify-center items-center  h-full sm:w-6/12 lg:w-3/12 xl:w-3/12 ">
            <div className="w-full h-full bg-[#268d60] rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!isFetching ? data?.count : <Spinner />}
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
            <div
              className="w-full h-full bg-[#e24c77] rounded-lg"
            >
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fetching ? category?.count : <Spinner />}
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
            <div className="w-full h-full bg-[#b1a826] rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fetch ? brand?.count : <Spinner />}
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
            <div className="w-full h-full bg-[#ff625b] rounded-lg">
              <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                  {!fe ? feedback?.count : <Spinner />}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#984fe7]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {!f ? customer?.count : <Spinner />}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#d1941a]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {!fetchi ? admin?.count : <Spinner />}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#58b5fb]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {data1?.count}
                  </h3>
                  <BsPerson
                    size={80}
                    className=" relative top-2  xl:top-4 right-2"
                  />
                </div>
                <h3 className="text-[16px] font-normal text-white capitalize relative left-4 top-4 ">
                  Delivery Boys
                </h3>
              </div>
            </div>
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#61d862]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {!fet ? order?.count : <Spinner />}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#2264d1]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {!fet ? order?.orderReceived : <Spinner />}
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
            <div className="w-[50%] h-[150px] py-2 px-2 sm:w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full h-full rounded-lg bg-[#7a7585]">
                <div className="flex justify-between  sm:xl:justify-between xl:justify-between">
                  <h3 className="relative inset-4 lx:inset-4 text-[40px] font-normal text-white  ">
                    {!fet ? order?.orderPending : <Spinner />}
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
            <div className="w-full  h-full bg-black border-[1px] border-black rounded-lg">
            <ScreenHeader>
        <Link to="/dashboard/dashboard" className="btn-dark rounded-xl ml-2">
          <i className="bi bi-arrow-left-short"></i> Delivery Boys list
        </Link>
      </ScreenHeader>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-12/12 p-3" onSubmit={createPro}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name..."
                onChange={handleInput}
                value={state.name}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email..."
                onChange={handleInput}
                value={state.email}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Contact
              </label>
              <input
                type="number"
                name="contact"
                className="form-control"
                id="contact"
                placeholder="Phone No.."
                onChange={handleInput}
                value={state.contact}
              />
            </div><div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="form-control"
                id="location"
                placeholder="Location..."
                onChange={handleInput}
                value={state.location}
              />
            </div>
            
           
            <div className="w-full p-3">
              <input
                type="submit"
                value={"save"}
                disabled={response.isLoading ? true : false}
                className="btn btn-indigo"
              />
            </div>
          </div>
        </form>
      </div>
             </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateDeliveryBoy;
