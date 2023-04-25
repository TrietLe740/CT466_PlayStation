import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Context from "../../../store/Context";
import authService from "../../../services/auth.service";

import "./login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const authServ = new authService();
  const { admin, setAdmin } = useContext(Context);

  const [emailError, setEmailError] = useState();
  const [pwdError, setPwdError] = useState();

  const handleLogin = async (data) => {
    setEmailError("");
    setPwdError("");
    try {
      const loginCheck = await authServ.adminLogin(data);
      setAdmin(loginCheck.data[0]);
    } catch (error) {
      if (error.response?.status === 403) {
        setPwdError(error.response.data.message);
      }
      if (error.response?.status === 404) {
        setEmailError(error.response.data.message);
      }

      console.log(error);
    }
  };

  const navigator = useNavigate();

  useEffect(() => {
    if (admin) {
      navigator(`/admin`);
    } else {
      navigator(`/admin/login`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin]);

  return (
    <Fragment>
      <div className="login-container">
        <ul
          className="nav nav-pills nav-justified mt-3 mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <h3>Admin Login</h3>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form
              onSubmit={handleSubmit((data) => {
                handleLogin(data);
              })}
            >
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">
                  Email
                </label>
                <input
                  {...register("email", { required: "*This is require" })}
                  name="email"
                  type="email"
                  className="form-control"
                />
                <p className="warning">{errors.email?.message}</p>
                <p className="warning">{emailError}</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "*Min length is 5",
                    },
                  })}
                  name="password"
                  type="password"
                  className="form-control"
                />
                <p className="warning">{errors.password?.message}</p>
                <p className="warning">{pwdError}</p>
              </div>
              <button type="submit" className="btn mb-4 w-100">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
