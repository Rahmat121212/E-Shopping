import {Link, useNavigate, useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { setSuccess } from "../../store/reducers/globalReducer";
import { useFetchCategoryQuery, useUpdateCategoryMutation } from "../../store/services/categoryService";
import Spinner from "../../components/Spinner";
import { useGetSingleAdminQuery, useUpdateAdminMutation } from "../../store/services/authService";
const UpdateAdmin = () => {
    const [state, setState] = useState({
        name:"",
        email:""
    });
    const {id} = useParams();
    const {data, isFetching} = useGetSingleAdminQuery(id);
    console.log('Admin data: ',state)
    useEffect(() => {
        data?.category && setState({...state,name:data?.category?.name,email:data?.category?.email}) ;
    }, [data?.category])
    const [saveCategory, response] = useUpdateAdminMutation();
    console.log("GG",response);
    const handleInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
      };
     const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const updateSubmit = e => {
       e.preventDefault();
       saveCategory(state,id);
   }
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
       if(response?.isSuccess) {
           dispatch(setSuccess(response?.data?.msg));
          navigate('/dashboard/admin');
       }
   }, [response?.isSuccess])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/admin" className="btn-dark rounded-xl"><i className="bi bi-arrow-left-short"></i> Admin list</Link>
           </ScreenHeader>
           {!isFetching ? <form className="w-full md:w-8/12" onSubmit={updateSubmit}>
               <h3 className="text-lg capitalize mb-3">Update</h3>
               {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger" key={key}>{error.msg}</p>
               ))}
               <div className="mb-3">
                   <input type="text" name="name" className="form-control" placeholder="Name ..." value={state.name} onChange={handleInput} />
               </div>
               <div className="mb-3">
                   <input type="email" name="email" className="form-control" placeholder="Email ..." value={state.email} onChange={handleInput}/>
               </div>
               <div className="mb-3">
                   <input type="submit" value='Update' className="btn btn-indigo" />
               </div>
           </form> : <Spinner />}
       </Wrapper>
    )
}
export default UpdateAdmin;