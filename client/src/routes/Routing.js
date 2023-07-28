import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
import Categories from "../screens/dashboard/Categories";
import CreateCategory from "../screens/dashboard/CreateCategory";
import Products from "../screens/dashboard/Products";
import UpdateCategory from "../screens/dashboard/UpdateCategory";
import CreateProduct from "../screens/dashboard/CreateProduct";
import Private from "./Private.js";
import Public from "./Public";
import EditProduct from "../screens/dashboard/EditProduct";
import Home from "../screens/home/Home";
import Login from "../screens/home/auth/Login";
import Register from "../screens/home/auth/Register";
import UserRoute from "./UserRoute";
import UserAuthRoute from "./UserAuthRoute";
import CatProducts from "../screens/home/CatProducts";
import Product from "../screens/home/Product";
import SearchProducts from "../screens/home/SearchProducts";
import Cart from "../screens/home/Cart";
import Orders from "../screens/dashboard/Orders";
import OrderDetails from "../screens/dashboard/OrderDetails";
import UserOrders from "../screens/users/UserOrders";
import UserOrderDetails from "../screens/users/UserOrderDetails";
import Flex from "../screens/dashboard/Flex";
import CreateFlex from "../screens/dashboard/CreateFlex";
import CreateBrand from "../screens/dashboard/CreateBrand";
import Brand from "../screens/dashboard/Brand";
import UpdateBrand from "../screens/dashboard/UpdateBrand";
import UpdateBrandImage from "../screens/dashboard/UpdateBrandImage";
import UpdateFlex from "../screens/dashboard/UpdateFlex";
import Dashboard from "../screens/users/Dashboard";
import AdminDashboard from "../screens/dashboard/AdminDashboard";
import CatProductsBrand from "../screens/home/CatProductsBrand";
import AboutUs from "../screens/home/AboutUs";
import ContactUs from "../screens/home/ContactUs";
import FeedBack from "../screens/dashboard/FeedBack";
import Not_Found_Page from "../components/Not_Found_Page";
import Admin_NOT_Found_Page from "../components/Admin_NOT_Found_Page";
import Admin from "../screens/dashboard/Admin";
import CreateAdmin from "../screens/dashboard/CreateAdmin";
import Customer from "../screens/dashboard/Customer";
import UpdateCategoryImage from "../screens/dashboard/UpdateCategoryImage";
// import Dashboard from "../screens/dashboard/Dashboard";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="cat-products/:name" element={<CatProducts />} />
        <Route path="cat-productsBrand/:name" element={<CatProductsBrand />} />
        <Route path="cat-products/:name/:page" element={<CatProducts />} />
        <Route path="cat-productsBrand/:name/:page" element={<CatProductsBrand />} />
        <Route
          path="search-products/:keyword/:page"
          element={<SearchProducts />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:name" element={<Product />} />
        <Route element={<UserAuthRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<UserRoute />}>
          <Route path="user" element={<Dashboard/>} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="orders/:page" element={<UserOrders />} />
          <Route path="user-order-details/:id" element={<UserOrderDetails />} />
          
        </Route>
        <Route path="*" element={<Not_Found_Page/>}  />
        <Route path="auth">
          <Route
            path="admin-login"
            element={
              <Public>
                <AdminLogin />
              </Public>
            }
          />
        </Route>
        <Route path="dashboard">
          
          <Route
            path="dashboard"
            element={
              <Private>
                <AdminDashboard />
              </Private>
            }
          />
         
          <Route
            path="feedback"
            element={
              <Private>
                <FeedBack />
              </Private>
            }
          />
          <Route
            path="feedback/:page"
            element={
              <Private>
                <FeedBack />
              </Private>
            }
          />
           <Route
            path="admin/:page"
            element={
              <Private>
                <Admin />
              </Private>
            }
          />
          <Route
            path="admin"
            element={
              <Private>
                <Admin />
              </Private>
            }
          />
           <Route
            path="customer/:page"
            element={
              <Private>
                <Customer />
              </Private>
            }
          />
          <Route
            path="customer"
            element={
              <Private>
                <Customer />
              </Private>
            }
          />
          <Route
            path="create-admin"
            element={
              <Private>
                <CreateAdmin />
              </Private>
            }
          />
           <Route
            path="flex/:page"
            element={
              <Private>
                <Flex />
              </Private>
            }
          />
          <Route
            path="flex"
            element={
              <Private>
                <Flex />
              </Private>
            }
          />
          
          <Route
            path="create-flex"
            element={
              <Private>
                <CreateFlex />
              </Private>
            }
          />
          
          <Route
            path="update-flex/:id"
            element={
              <Private>
                <UpdateFlex />
              </Private>
            }
          />
          <Route
            path="products"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="products/:page"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="edit-product/:id"
            element={
              <Private>
                <EditProduct />
              </Private>
            }
          />
          <Route
            path="categories"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="categories/:page"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="create-category"
            element={
              <Private>
                <CreateCategory />
              </Private>
            }
          />
          <Route
            path="update-category/:id"
            element={
              <Private>
                <UpdateCategory />
              </Private>
            }
          />
          <Route
            path="update-image-category/:id"
            element={
              <Private>
                <UpdateCategoryImage />
              </Private>
            }
          />
          <Route
            path="create-product"
            element={
              <Private>
                <CreateProduct />
              </Private>
            }
          />
          <Route
            path="create-brand"
            element={
              <Private>
                <CreateBrand />
              </Private>
            }
          />
          <Route
            path="brand"
            element={
              <Private>
                <Brand/>
              </Private>
            }
          />
          <Route
            path="brand/:page"
            element={
              <Private>
                <Brand/>
              </Private>
            }
          />
          <Route
            path="create-brand"
            element={
              <Private>
                <CreateBrand />
              </Private>
            }
          />
          <Route
            path="update-brand/:id"
            element={
              <Private>
                <UpdateBrand/>
              </Private>
            }
          />
          <Route
            path="update-brand-image/:id"
            element={
              <Private>
                <UpdateBrandImage/>
              </Private>
            }
          />
          
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:page" element={<Orders />} />
          <Route path="order-details/:id" element={<OrderDetails />} />
          <Route path="*" element={<Admin_NOT_Found_Page/>}  />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
