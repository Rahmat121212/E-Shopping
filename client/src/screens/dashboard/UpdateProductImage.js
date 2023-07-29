import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useCreateMutation, useFetchCategoryQuery, useUpdateCategoryImageMutation } from "../../store/services/categoryService";
import { setSuccess } from "../../store/reducers/globalReducer";
import ImagesPreview from "../../components/ImagesPreview";
import { useFetchFlexQuery, useUpdateFlexImageMutation } from "../../store/services/flexService";
import { useGetProductQuery, useUpdateProductImageMutation } from "../../store/services/productService";
const UpdateProductImage = () => {
  const {id} = useParams();
  console.log("id,.,.",id);
  const {data:cate, isFetching} = useGetProductQuery(id);
    console.log('Product data: ',cate?.image1)
  const [state, setState] = useState({
    image1: "",
    image2: "",
    image3: "",
  });
  const [preview, setPreview] = useState({
    image1: "",
    image2: "",
    image3: "",
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
  const [saveCategory, response] = useUpdateProductImageMutation();
  console.log(">>>",response?.error?.data?.errors[0] );
  const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
  const createPro = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('id', id)
    formData.append("image1", state.image1);
    formData.append("image2", state.image2);
    formData.append("image3", state.image3);
    saveCategory(formData);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/products");
    }
  }, [response?.isSuccess]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/products" className="btn-dark rounded-xl">
          <i className="bi bi-arrow-left-short"></i> Product list
        </Link>
      </ScreenHeader>
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createPro}>
        {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger w-[320px] " key={key}>{error.msg}</p>
               ))}
          <div className="flex flex-wrap">
          <div className="w-full p-3">
              <label htmlFor="image1" className="label">
                Image 1
              </label>
              <input
                type="file"
                name="image1"
                id="image1"
                className="input-file"
                onChange={imageHandle}
              />
            </div>

            <div className="w-full p-3">
              <label htmlFor="image2" className="label">
                Image 2
              </label>
              <input
                type="file"
                name="image2"
                id="image2"
                className="input-file"
                onChange={imageHandle}
              />
            </div>

            <div className="w-full p-3">
              <label htmlFor="image3" className="label">
                Image 3
              </label>
              <input
                type="file"
                name="image3"
                id="image3"
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
          <ImagesPreview url={`/images/${cate?.image1}`} heading="Previous Image 1" />
          <ImagesPreview url={`/images/${cate?.image2}`} heading="Previous Image 2" />
          <ImagesPreview url={`/images/${cate?.image3}`} heading="Previous Image 3" />
        </div>
        <div className="w-full ml-0 sm:w-4/12 lg:ml-[350px]  xl:-mt-[720px]   p-3">
          <ImagesPreview url={preview.image1} heading="New image 1" />
          <ImagesPreview url={preview.image2} heading="New image 2" />
          <ImagesPreview url={preview.image3} heading="New image 3" />
        </div>
        
      </div>
    </Wrapper>
  );
};
export default UpdateProductImage;
