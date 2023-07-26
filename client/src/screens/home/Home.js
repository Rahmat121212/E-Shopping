import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";
import Footer from "../../components/home/Footer";
import HomeProduct from "../../components/home/HomeProduct";
import Nav from "../../components/home/Nav";
import ProductCard from "../../components/home/ProductCard";
import ProductDiv from "../../components/home/ProductDiv";
import SaleSlider from "../../components/home/SaleSlider";
import Slider from "../../components/home/Slider";
import SliderSale from "../../components/home/SliderSale";
import { useRandomCategoriesQuery } from "../../store/services/categoryService";
import Flex from "./Flex";
import ButtomNav from "../../components/home/ButtomNav"
import SideBar from "../../components/home/SideBar";
import { useState } from "react";
import Search from "../../components/home/Search";

const Home = () => {
  const {data,isFetching} =  useRandomCategoriesQuery();
  const [side, setSide] = useState('-left-[300px]')
  const openSidebar = () => {
      setSide("left-0");
  }
  const closeSidebar = () => {
      setSide('-left-[300px]');
  }
 
  return (
    <>
      <Nav/>
      {/* Flex For Home */}
      <Flex/>
      
      <div className="my-container ">
        <Categories />
        
      </div>
      {/* <ProductCard/> */}
      <ProductDiv />
  
      <Brands/>
      {/* Sale Slider */}
      {/* <SaleSlider/> */}
      
      {/* <Slider/> */}
      <SideBar side={side} closeSidebar={closeSidebar} />
     <Footer/>
     <ButtomNav openSidebar={openSidebar} />
    </>
  );
};
export default Home;
