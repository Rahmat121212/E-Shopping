import { useEffect, useState } from "react";
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../../components/home/Nav";
import ButtomNav from "../../components/home/ButtomNav";
import SideBar from "../../components/home/SideBar";
import Footer from "../../components/home/Footer";
import { useCreateFeedBackMutation } from "../../store/services/feedbackService";
import toast,{ Toaster } from "react-hot-toast";
import { setSuccess } from "../../store/reducers/globalReducer";

// import { useSendPaymentMutation } from "../../store/services/paymentService";

const ContactUs = () => {
  const  [state,setState] = useState({
    name:"",
    email:"",
    subject : "",
    message : ""

  })
  const inputHandle = e=>{
    setState({
      ...state , [e.target.name] : e.target.value 
    })
  }
  const [data,response] = useCreateFeedBackMutation()

  console.log("R=====>",response);
  const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];

  const onsubmit = e =>{
    e.preventDefault();
    data(state)
    console.log("state ===>" ,state);
  
  }
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
        toast.success(response?.data?.msg);
    
      
    }
  }, [response?.isSuccess]);
  const [side, setSide] = useState('-left-[300px]')
  const openSidebar = () => {
      setSide("left-0");
  }
  const closeSidebar = () => {
      setSide('-left-[300px]');
  }
  const handleRedirect = () => {
    const phoneNumber = '+923435185993'
    const message1 = 'Hello from my React app!';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message1)}`;
  };
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-container mt-3"
      >
        <Toaster position="top-right" reverseOrder={true} />
<div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
  <div className="my-10 lg:my-10 xl:my-10 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
    <div className="md:w-full  lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
      <div className="mb-6 lg:border lg:rounded-md  border-gray-300 lg:p-7">
        <h4 className="text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">
          Find us here
        </h4>
        <div className="flex pb-7">
          <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
            </svg>
          </div>
          <div className="flex flex-col pl-4 ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h5 className="text-sm font-bold text-heading">Address</h5>
            <a className="text-sm mt-0" href="/">
              Shamshatto Bazar Way 12 Peshawar Pakistan
            </a>
          </div>
        </div>
        <div className="flex pb-7">
          <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
            </svg>
          </div>
          <div className="flex flex-col pl-4 ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h5 className="text-sm font-bold text-heading">Email</h5>
            <a className="text-sm mt-0" href="/">
              baheer224@gmail.com
            </a>
          </div>
        </div>
        <div className="flex pb-7">
          <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z" />
            </svg>
          </div>
          <div className="flex flex-col pl-4 ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h5 className="text-sm font-bold text-heading">Phone</h5>
            <a className="text-sm mt-0" href="/">
              +92 343 51 85 993, +92 305 40 42 631
            </a>
          </div>
        </div>
        <div onClick={handleRedirect} className="flex pb-7 cursor-pointer ">
          <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
          </div>
          <div  className="flex flex-col pl-4 ltr:pl-3 rtl:pr-3 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h5 className="text-sm font-bold text-heading">WhatsApp</h5>
            <span className="text-sm mt-0" >
              +92 343 51 85 993
            </span>
          </div>
        </div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d217659.49593491203!2d74.3243776!3d31.5260928!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1690365114924!5m2!1sen!2s"
  className="w-full lg:w-[450px] h-[300px] "
  style={{ border: 0,borderRadius:8}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
    </div>
    <div className="md:w-full lg:w-3/5  2xl:w-4/6 ml-4 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
      <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
        <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
          Get in touch
        </h4>
      </div>
      <form onSubmit={onsubmit}
        className="w-full mx-auto flex flex-col justify-center "
       
      >
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="w-full md:w-1/2 ">
              <label
                htmlFor="name"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Your Name (required)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={inputHandle}
                value={state.name}
                placeholder="Enter Your Name"
                className="py-2  px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                
              />
            </div>
            <div className="w-full  md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 lg:ml-10 rtl:lg:mr-5 mt-2 md:mt-0">
              <label
                htmlFor="email"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Your Email (required)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={state.email}
                onChange={inputHandle}
                placeholder="Enter Your Email"
                className="py-2 px-4  md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
              
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={state.subject}
              onChange={inputHandle}
              placeholder="Enter Your Subject"
              className="py-2 px-4 ml md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
           
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-semibold text-sm leading-none mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={state.message}
              onChange={inputHandle}
              className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"

              rows={4}
              placeholder="Write your message here"
              defaultValue={""}
            />
          </div>
          <div className="relative">
            <button
              data-variant="flat"
              className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
</div>


      </motion.div>
      <SideBar side={side} closeSidebar={closeSidebar} />
     <Footer/>
     <ButtomNav openSidebar={openSidebar} />
    </>
  );
};

export default ContactUs;
