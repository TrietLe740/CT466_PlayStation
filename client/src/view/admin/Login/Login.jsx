import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Context from "../../../store/Context";
import authService from "../../../services/auth.service";

import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const authServ = new authService();
  const { isLogin, setAuth } = useContext(Context);

  const [emailError, setEmailError] = useState();
  const [pwdError, setPwdError] = useState();

  const handleLogin = async (data) => {
    setEmailError("");
    setPwdError("");
    try {
      const loginCheck = await authServ.login(data);
      setAuth(loginCheck.data[0]);
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
    if (isLogin) {
      navigator(`/`);
    } else {
      navigator(`/login`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <Fragment>
      <div className="login-container">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faCircleArrowLeft} /> Back
        </Link>
        <ul
          className="nav nav-pills nav-justified mt-3 mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link
              to={`/login`}
              className="nav-link active"
              data-mdb-toggle="pill"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              to={`/register`}
              className="nav-link"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </Link>
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
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      {...register("check", { required: true })}
                      name="check"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <button type="submit" className="btn mb-4 w-100">
                Sign in
              </button>
              <div className="text-center">
                <p>
                  Not a member? <Link to={`/register`}>Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
