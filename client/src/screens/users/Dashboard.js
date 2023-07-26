import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Nav from "../../components/home/Nav";
import Header from "../../components/home/Header";
import AccountList from "../../components/home/AccountList";
import { useVerifyPaymentQuery } from "../../store/services/paymentService";
import { emptyCart } from "../../store/reducers/cartReducer";
import SideBar from "../../components/home/SideBar";
import Footer from "../../components/home/Footer";
import ButtomNav from "../../components/home/ButtomNav";
const Dashboard = () => {
  const { user } = useSelector((state) => state.authReducer);
  const [side, setSide] = useState('-left-[300px]')
  const openSidebar = () => {
    setSide("left-0");
  }
  const closeSidebar = () => {
    setSide('-left-[300px]');
  }
  const [params] = useSearchParams();
  const id = params.get("session_id");
  const { data, isSuccess } = useVerifyPaymentQuery(id, {
    skip: id ? false : true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("cart");
      toast.success(data.msg);
      dispatch(emptyCart());
      navigate("/user");
    }
  }, [isSuccess]);
  return (
    <>
      <Nav />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mt-[5px]">
        <Header>my account</Header>
        <div className="my-container mt-[10px]">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-4/12 p-6">
              <AccountList />
            </div>
            <div className="w-full md:w-8/12 p-6">
              <h1 className="heading">name</h1>
              <span className="block mt-3 capitalize font-medium text-sm">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <SideBar side={side} closeSidebar={closeSidebar} />
      <Footer />
      <ButtomNav openSidebar={openSidebar} />
    </>
  );
};

export default Dashboard;
