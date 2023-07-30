import {useDispatch, useSelector} from "react-redux"
import { logout } from "../store/reducers/authReducer";
import jwtDecode from "jwt-decode";
const AdminNav = ({openSidebar}) => {
    const { adminToken } = useSelector((state) => state.authReducer);
    const {name} = jwtDecode(adminToken);

    const dispatch = useDispatch();
    const adminLogout = () => {
        dispatch(logout('admin-token'));
    }
    return(
     <nav className="fixed left-0  sm:left-64 top-4 right-0 mx-4 z-[1000]">
      <div className="bg-gray-800 w-full rounded-lg flex justify-between sm:justify-between items-center p-4">
      <i className="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block" onClick={openSidebar}></i>
      {
        adminToken ? <div className="btn-dark rounded-xl py-2  px-4 text-white border-b border-gray-700 capitalize"  >
        {name}
        </div> : <div className="btn-dark rounded-xl py-2  px-4 text-white border-b border-gray-700 capitalize"  >
           No User
       </div>
      }
       
       <button className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize" onClick={adminLogout}>logout</button>
      </div>
     </nav>
    )
}
export default AdminNav;