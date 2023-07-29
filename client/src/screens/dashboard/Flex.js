import {useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import { useAllFlexsQuery, useDeleteFlexMutation, useGetFlexsQuery } from "../../store/services/flexService";
const Flex = () => {
   let {page} = useParams();
   if(!page) {
      page = 1;
   }
    const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    // const {data = [], isFetching} = useGetQuery(page);
     const {data=[],isFetching}= useGetFlexsQuery(page);
    // const [removeCategory, response] = useDeleteCategoryMutation();
    const [removeFlex,response] = useDeleteFlexMutation();

    console.log("=bb=>",data)
    const deleteCat = id => {
       if(window.confirm('Are you really want to delete the category?')) {
        removeFlex(id);
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
              <Link to="/dashboard/create-flex" className="btn-dark rounded-xl">add Flex <i className="bi bi-plus"></i></Link>
           </ScreenHeader>
           {success && <div className="alert-success">{success}</div>}
           {!isFetching ? data?.flex?.length > 0 && <><div>
              <table className="w-full bg-gray-900 rounded-md">
                 <thead>
                    <tr className="border-b border-gray-800 text-left">
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">flex name</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">flex Image</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">edit</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">edit Image</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                    </tr>
                 </thead>
                 <tbody>
                    {data?.flex?.map(flex => (
                       <tr key={flex._id} className="odd:bg-gray-800">
                          <td className="p-3 capitalize text-sm font-normal text-gray-400">{flex.name}</td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400">
                           <img src={`/uploads/flexs/${flex.image}`} alt="image name" className="w-20 h-20 rounded-md object-cover" />
                        </td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={`/dashboard/update-flex/${flex._id}`} className="btn btn-warning">edit</Link></td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={`/dashboard/update-flex-image/${flex._id}`} className="btn btn-warning">edit Image</Link></td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><button className="btn btn-danger" onClick={() => deleteCat(flex._id)}>delete</button></td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div><Pagination page={parseInt(page)} perPage={data.perPage} count={data.count} path="dashboard/flex" /></> : <Spinner />}
       </Wrapper>
    )
}
export default Flex;