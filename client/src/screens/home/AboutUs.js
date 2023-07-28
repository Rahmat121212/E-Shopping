import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import currency from "currency-formatter";
import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";
import Nav from "../../components/home/Nav";
import { discount } from "../../utils/discount";
import Quantity from "../../components/home/Quantity";
import {
  incQuantity,
  decQuantity,
  removeItem,
} from "../../store/reducers/cartReducer";
import { useSendPaymentMutation } from "../../store/services/paymentService";
import ButtomNav from "../../components/home/ButtomNav";
import SideBar from "../../components/home/SideBar";
import Footer from "../../components/home/Footer";
// import { useSendPaymentMutation } from "../../store/services/paymentService";
const AboutUs = () => {
  const [side, setSide] = useState('-left-[300px]')
  const openSidebar = () => {
      setSide("left-0");
  }
  const closeSidebar = () => {
      setSide('-left-[300px]');
  }
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-container mt-3"
      >
      Toogl promotes their core value of remote working throughout their website
       and their About Us page is a great example of how you can promote your core 
       values too. As a core value to their business, their About Us page is focused
        around this global team and the productivity that they bring to the company.
         Not only do they put their team front and center, but they share how the team 
         works so that someone interested in applying for a
       position with the company can be sure they will enjoy working for the 
       company before they start.
      </motion.div>
      <SideBar side={side} closeSidebar={closeSidebar} />
     <Footer/>
     <ButtomNav openSidebar={openSidebar} />
    </>
  );
};

export default AboutUs;
