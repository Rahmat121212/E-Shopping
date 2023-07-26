import currency from "currency-formatter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
const ProductCard = ({ product }) => {
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  let result = 0;
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    total = 0;
  if (product?.reviews?.length > 0) {
    product?.reviews?.forEach((item) => {
      if (item.rating === 1) {
        one += 1;
      }
      if (item.rating === 2) {
        two += 1;
      }
      if (item.rating === 3) {
        three += 1;
      }
      if (item.rating === 4) {
        four += 1;
      }
      if (item.rating === 5) {
        five += 1;
      }
    });
    total = one + two + three + four + five;
    result = (1 * one + 2 * two + 3 * three + 4 * four + 5 * five) / total;
  } else {
    total = 0;
    result = 0;
  }
  const finalResult = parseFloat(result).toFixed(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full sm:w-[46.5%] md:w-[30%] xl:w-[23%] mx-3 my-2 shadow-md rounded-lg   "
      key={product._id}
    >
      <Link to={`/product/${product._id}`}>
        <div className="w-full  overflow-hidden">
          <img
            src={`/images/${product.image1}`}
            alt="product image"
            className="w-full h-[310px] rounded-t-lg  object-cover transition-all duration-300 transform hover:scale-110"
          />
        </div>
        <p className="capitalize text-base mx-3 font-bold text-black my-2.5">
          {product.title}
        </p>
        <div className="flex mx-3 items-center">
          <div className="flex items-center space-x-2 mb-1">
            <span>{finalResult}</span>
            <AiFillStar color="orange" />
            <span>({total})</span>
          </div>
        </div>
        <div className="flex justify-between mx-3 ">
          <span className="text-lg font-medium text-black">
            {currency.format(discountPrice, { code: "USD" })}
          </span>
          <span className="text-lg font-medium text-gray-600 line-through">
            {currency.format(product.price, { code: "USD" })}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
