import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useCProductMutation } from "../../store/services/productService";
import { setSuccess } from "../../store/reducers/globalReducer";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { useAuthLoginMutation, useAuthRegisterMutation } from "../../store/services/authService";
const CreateAdmin = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [login, response] = useAuthRegisterMutation();
  const createPro = (e) => {
    e.preventDefault();
    login(state)
    console.log("SSS--->",state);
  };
  useEffect(() => {
    if (!response.isSuccess) {
      response?.error?.data?.errors.map((err) => {
        toast.error(err.msg);
      });
    }
  }, [response?.error?.data?.errors]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/admin");
    }
  }, [response?.isSuccess]);
  
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/admin" className="btn-dark rounded-xl">
          <i className="bi bi-arrow-left-short"></i> Admin list
        </Link>
      </ScreenHeader>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createPro}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name..."
                onChange={handleInput}
                value={state.name}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email..."
                onChange={handleInput}
                value={state.email}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password..."
                onChange={handleInput}
                value={state.password}
              />
            </div>
            
           
            <div className="w-full p-3">
              <input
                type="submit"
                value={"save Admin"}
                disabled={response.isLoading ? true : false}
                className="btn btn-indigo"
              />
            </div>
          </div>
        </form>
       
      </div>
    </Wrapper>
  );
};
export default CreateAdmin;
