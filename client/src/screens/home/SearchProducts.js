import { useParams } from "react-router-dom";
import Header from "../../components/home/Header";
import Nav from "../../components/home/Nav";
import { useSearchProductsQuery } from "../../store/services/homeProducts";
import ProductCard from "../../components/home/ProductCard";
import Pagination from "../../components/Pagination";
import ProductSkeleton from "../../components/home/ProductSkeleton";
import { useState } from "react";
import ButtomNav from "../../components/home/ButtomNav";
import Footer from "../../components/home/Footer";
import SideBar from "../../components/home/SideBar";

const SearchProducts = () => {
  const { keyword, page = 1 } = useParams();
  const [side, setSide] = useState('-left-[300px]')
    const openSidebar = () => {
        setSide("left-0");
    }
    const closeSidebar = () => {
        setSide('-left-[300px]');
    }
  const { data, isFetching } = useSearchProductsQuery({
    keyword,
    page: parseInt(page),
  });
  return (
    <>
      <Nav />
      <div className="mt-[5px] ">
        <Header>#{keyword}</Header>
      </div>
      <div className="my-container my-10">
        {isFetching ? (
          <ProductSkeleton />
        ) : data.count > 0 ? (
          <>
            <p className="text-base font-medium text-gray-700">
              {data.count} products found for #{keyword} keyword
            </p>
            <div className="flex flex-wrap -mx-5">
              {data.products.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })}
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
              path={`cat-products/${keyword}`}
              theme="light"
            />
          </>
        ) : (
          <p className="alert-danger">
            No products found for #{keyword} keyword
          </p>
        )}
      </div>
      <SideBar side={side} closeSidebar={closeSidebar} />
            <Footer />
            <ButtomNav openSidebar={openSidebar} />
    </>
  );
};

export default SearchProducts;
