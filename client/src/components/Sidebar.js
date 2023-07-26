import { Link } from "react-router-dom";
import { CgDisplayFlex } from 'react-icons/cg';
import { TbBrandAirbnb } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute top-4 right-4 sm:hidden text-white block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
     
        <img src="/logo.jpg" alt="logo" className="bg-white w-[50%] h-[20%] bg mx-14 object-cover my-7 felx justify-center items-center rounded-[90%]" />
     
      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-card-list mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-base capitalize">
            products
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bag-check mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/orders" className="text-base capitalize">
            orders
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-people-fill mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-base capitalize">
            customers
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/categories" className="text-base capitalize">
            categories
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
          <CgDisplayFlex className="mr-2 inline-block text-lg" size={23} />
          <Link to="/dashboard/flex" className="text-base capitalize">
            Flex
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
        <TbBrandAirbnb className="mr-2 inline-block text-lg" size={23} />
          <Link to="/dashboard/brand" className="text-base capitalize">
             Brands
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
        <VscFeedback className="mr-2 inline-block text-lg" size={23} />
          <Link to="/dashboard/feedback" className="text-base capitalize">
             FeadBack
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
