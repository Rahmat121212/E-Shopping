import {Link, useNavigate, useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { setSuccess } from "../../store/reducers/globalReducer";import Spinner from "../../components/Spinner";
import { useFetchBrandQuery, useUpdateBrandImageMutation, useUpdateBrandMutation } from "../../store/services/brandService";
const UpdateBrandImage = () => {
    const [state, setState] = useState('');
    const {id} = useParams();
    const {data, isFetching} = useFetchBrandQuery(id);
    console.log('Brand databbbbbbb: ',data)
    const [saveBrandimg, response] = useUpdateBrandImageMutation();
    console.log(response)
     const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const updateSubmit = e => {
       e.preventDefault();
       saveBrandimg({name: state, id});
   }
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
       if(response?.isSuccess) {
           dispatch(setSuccess(response?.data?.message));
          navigate('/dashboard/brand');
       }
   }, [response?.isSuccess])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/brand" className="btn-dark rounded-xl"><i className="bi bi-arrow-left-short"></i> Brand list</Link>
           </ScreenHeader>
           {!isFetching ? <form className="w-full md:w-8/12" onSubmit={updateSubmit}>
               <h3 className="text-lg capitalize mb-3">Update Brand Image</h3>
               {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger" key={key}>{error.msg}</p>
               ))}
               <div className="mb-3">
          <label htmlFor="image" className="label">
            Brand Image 
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="input-file"
          />
        </div>
               <div className="mb-3">
                   <input type="submit" value='Update' className="btn btn-indigo" />
               </div>
           </form> : <Spinner />}
       </Wrapper>
    )
}
export default UpdateBrandImage;