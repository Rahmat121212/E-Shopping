import { Link } from "react-router-dom";
import { useCatProductsQuery } from "../../store/services/homeProducts";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
const HomeProduct = ({ category }) => {
  const { data, isFetching } = useCatProductsQuery({
    name: category.name,
    page: "",
  });
  return isFetching ? (
    <ProductSkeleton />
  ) : (
    data?.products?.length > 0 && (
      <>
        <div className="flex justify-end mr-3 items-center flex-wrap mb-5 md:mb-6">
          <span className="capitalize">
            <Link to={`/cat-products/${category.name}`}>see all</Link>
          </span>
        </div>
        <div className="flex flex-wrap  ">
          {data?.products.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </div>

      </>
    )
  );
};

export default HomeProduct;
