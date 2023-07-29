import {useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import { useGetQuery, useDeleteCategoryMutation } from "../../store/services/categoryService";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import { useDeleteAdminMutation, useGetAuthQuery } from "../../store/services/authService";
const Admin = () => {
   let {page} = useParams();
   if(!page) {
      page = 1;
   }
    const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    const {data = [], isFetching} = useGetAuthQuery(page);
    const [removeCategory, response] = useDeleteAdminMutation();
    console.log("FF>>>",data)
    const deleteCat = id => {
       if(window.confirm('Are you really want to delete the category?')) {
          removeCategory(id);
       }
    }
    useEffect(() => {
         if(response.isSuccess) {
            dispatch(setSuccess(response?.data?.message));
         }
    }, [response?.data?.message])
    useEffect(() => {
     return () => {
        dispatch(clearMessage())
     }
    }, [])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/create-admin" className="btn-dark rounded-xl">add Admin <i className="bi bi-plus"></i></Link>
           </ScreenHeader>
           {success && <div className="alert-success">{success}</div>}
           {!isFetching ? data?.admin?.length > 0 && <><div>
              <table className="w-full bg-gray-900 rounded-md">
                 <thead>
                    <tr className="border-b border-gray-800 text-left">
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">name</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">email</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">edit email</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">edit name , password</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                    </tr>
                 </thead>
                 <tbody>
                    {data?.admin?.map(item => (
                       <tr key={item._id} className="odd:bg-gray-800">
                          <td className="p-3 capitalize text-sm font-normal text-gray-400">{item.name}</td>
                          <td className="p-3  text-sm font-normal text-gray-400">{item.email}</td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={`/dashboard/${item._id}`} className="btn btn-warning">edit</Link></td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={`/dashboard//${item._id}`} className="btn btn-warning">edit</Link></td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><button className="btn btn-danger" onClick={() => deleteCat(item._id)}>delete</button></td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div><Pagination page={parseInt(page)} perPage={data.perPage} count={data.count} path="dashboard/admin" /></> : <Spinner />}
       </Wrapper>
    )
}
export default Admin;