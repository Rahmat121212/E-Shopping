import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useCreateMutation, useFetchCategoryQuery, useUpdateCategoryImageMutation } from "../../store/services/categoryService";
import { setSuccess } from "../../store/reducers/globalReducer";
import ImagesPreview from "../../components/ImagesPreview";
import { useFetchFlexQuery, useUpdateFlexImageMutation } from "../../store/services/flexService";
const UpdateFlexImage = () => {
  const {id} = useParams();
  console.log("id,.,.",id);
  const {data:cate, isFetching} = useFetchFlexQuery(id);
    console.log('flex data: ',cate?.flex?.image)
  const [state, setState] = useState({
    image :""
  });
  const [preview, setPreview] = useState({
    image: ""
  });
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
console.log("Image",state);
  const [saveCategory, response] = useUpdateFlexImageMutation();
  console.log(">>>",response?.error?.data?.errors[0] );
  const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
  const createPro = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('id', id)
    formData.append('image', state.image)
    saveCategory(formData);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/flex");
    }
  }, [response?.isSuccess]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/flex" className="btn-dark rounded-xl">
          <i className="bi bi-arrow-left-short"></i> Flex list
        </Link>
      </ScreenHeader>
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createPro}>
        {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger" key={key}>{error.msg}</p>
               ))}
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
          <ImagesPreview url={`/uploads/flexs/${cate?.flex?.image}`} heading="Previous Image" />
          <ImagesPreview url={preview.image} heading="New image" />
        </div>
      </div>
    </Wrapper>
  );
};
export default UpdateFlexImage;
