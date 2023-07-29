import {Link, useNavigate, useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { setSuccess } from "../../store/reducers/globalReducer";import Spinner from "../../components/Spinner";
import { useFetchBrandQuery, useUpdateBrandMutation } from "../../store/services/brandService";
import { useFetchFlexQuery, useGetFlexsQuery, useUpdateFlexMutation } from "../../store/services/flexService";
const UpdateFlex = () => {
    const [state, setState] = useState("");
    const {id} = useParams();
    const {data, isFetching} = useFetchFlexQuery(id);
    console.log('databbbbbbb: ',state)
    useEffect(() => {
        data?.flex && setState(data?.flex);
    }, [data?.flex])
   
    const handleInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
      };
    const [saveFlex, response] = useUpdateFlexMutation();
    console.log(response)
     const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const updateSubmit = e => {
       e.preventDefault();
       saveFlex(state,id);
   }
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
       if(response?.isSuccess) {
           dispatch(setSuccess(response?.data?.msg));
          navigate('/dashboard/flex');
       }
   }, [response?.isSuccess])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/flex" className="btn-dark rounded-xl"><i className="bi bi-arrow-left-short"></i> Flex list</Link>
           </ScreenHeader>
           {!isFetching ? <form className="w-full md:w-8/12" onSubmit={updateSubmit}>
               <h3 className="text-lg capitalize mb-3">Update Flex</h3>
               {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger" key={key}>{error.msg}</p>
               ))}
               <div className="mb-3">
                   <input type="text" name="name" className="form-control" placeholder="Brand Name..." value={state.name} onChange={handleInput}  />
               </div>
               <div className="mb-3">
                   <input type="url" name="url" className="form-control" placeholder="Brand Name..." value={state.url} onChange={handleInput}  />
               </div>
               <div className="mb-3">
                   <input type="submit" value='Update' className="btn btn-indigo" />
               </div>
           </form> : <Spinner />}
       </Wrapper>
    )
}
export default UpdateFlex;