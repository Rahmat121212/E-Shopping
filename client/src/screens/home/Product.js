import { Link, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { useGetProductQuery } from "../../store/services/productService";
import Nav from "../../components/home/Nav";
import DetailsCard from "../../components/home/DetailsCard";
import ProductLoader from "../../components/home/ProductLoader";
import SideBar from "../../components/home/SideBar";
import Footer from "../../components/home/Footer";
import ButtomNav from "../../components/home/ButtomNav";
import { useState } from "react";

const Product = () => {
  const { name } = useParams();
  const [side, setSide] = useState('-left-[300px]')
    const openSidebar = () => {
        setSide("left-0");
    }
    const closeSidebar = () => {
        setSide('-left-[300px]');
    }
  const { data, isFetching } = useGetProductQuery(name);
  console.log(data, isFetching);
  return (
    <>
      <Nav />
      <div className="my-container mt-5">
        {isFetching ? (
          <ProductLoader />
        ) : (
          <>
            <ul className="flex items-center">
              <li className="capitalize text-gray-600">
                <Link to="/">home</Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/cat-products/${data.category}`}>
                  {data.category}
                </Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/product/${data._id}`}>{data.title}</Link>
              </li>
            </ul>
            <DetailsCard product={data} />
          </>
        )}
      </div>
      <SideBar side={side} closeSidebar={closeSidebar} />
            <Footer />
            <ButtomNav openSidebar={openSidebar} />
    </>
  );
};

export default Product;
