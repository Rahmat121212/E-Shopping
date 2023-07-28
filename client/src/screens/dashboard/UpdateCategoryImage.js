import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useCreateMutation, useFetchCategoryQuery } from "../../store/services/categoryService";
import { setSuccess } from "../../store/reducers/globalReducer";
import ImagesPreview from "../../components/ImagesPreview";
const UpdateCategoryImage = () => {
  const {id} = useParams();
  console.log("id,.,.",id);
  const {data:cate, isFetching} = useFetchCategoryQuery(id);
    console.log('category data: ',cate?.category?.image)
  const [state, setState] = useState({
    name:"",
    image :""
  });
  const [preview, setPreview] = useState({
    image: "",
   
  });
const handleInput = (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};
const imageHandle = (e) => {
  if (e.target.files.length !== 0) {
    setState({ ...state, [e.target.name]: e.target.files[0] });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview({ ...preview, [e.target.name]: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  }
};
  const [saveCategory, data] = useCreateMutation();
  console.log(data);
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  const createPro = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('data', JSON.stringify(state));
    formData.append('image', state.image)
    
    saveCategory(formData);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.isSuccess) {
      dispatch(setSuccess(data?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/categories" className="btn-dark rounded-xl">
          <i className="bi bi-arrow-left-short"></i> categories list
        </Link>
      </ScreenHeader>
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createPro}>
          <div className="flex flex-wrap">
          <div className="w-full p-3">
              <label htmlFor="image1" className="label">
                Image 
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="input-file"
                onChange={imageHandle}
              />
            </div>
            <div className="w-full p-3">
              <input
                type="submit"
                value={"update product"}
                className="btn btn-indigo"
              />
            </div>
          </div>
        </form>
        <div className="w-full xl:w-4/12 p-3">
          <ImagesPreview url={`/uploads/${cate?.category?.image}`} heading="Previous Image" />
          <ImagesPreview url={preview.image} heading="New image" />
        </div>
      </div>
    </Wrapper>
  );
};
export default UpdateCategoryImage;
