import {
  faCircleArrowLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import authService from "../../../services/auth.service";
import "./register.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [emailErr, setEmailErr] = useState();
  const closeModal = () => setOpen(false);

  const authServ = new authService();

  return (
    <div className="register-container">
      {/* <div id="popup-root"></div> */}
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
            className="nav-link"
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
            className="nav-link  active"
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
      <form
        onSubmit={handleSubmit(async (data) => {
          setEmailErr("");
          try {
            const registerResult = await authServ.register(data);
            if (registerResult.status === 200) {
              setOpen(true);
            }
            console.log(registerResult.status);
          } catch (error) {
            if (error.response.status === 409) {
              setEmailErr(error.response.data.message);
              console.log(error.response.data.message);
            }
            console.log(error);
          }
        })}
      >
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input
            {...register("email", { required: "*This is require" })}
            name="email"
            type="email"
            id="registerEmail"
            className="form-control"
          />
          <p className="warning">{errors.email?.message}</p>
          {emailErr && <p className="warning">{emailErr}</p>}
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
          <input
            {...register("name", { required: "*This is require" })}
            type="text"
            id="registerName"
            className="form-control"
          />
          <p className="warning">{errors.name?.message}</p>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input
            {...register("password", { required: "*This is require" })}
            name="password"
            type="password"
            id="registerPassword"
            className="form-control"
          />
          <p className="warning">{errors.password?.message}</p>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
          <input
            {...register("repeatpassword", { required: "*This is require" })}
            name="repeatpassword"
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
          <p className="warning">{errors.repeatpassword?.message}</p>
        </div>

        <div className="form-check d-flex mb-4">
          <input
            {...register("check", { required: "*" })}
            name="check"
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
          <p className="warning">{errors.check?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-3 w-100">
          Sign Up
        </button>
        <Popup
          position="top center"
          open={open}
          closeOnDocumentClick
          onClose={closeModal}
          modal
        >
          {(close) => (
            <div className="popup-register">
              <div>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <p className="text-success">Successfully</p>
              <p>
                <Link to={`/login`} className="close" onClick={close}>
                  OK
                </Link>
              </p>
            </div>
          )}
        </Popup>
      </form>
    </div>
  );
}

export default Register;
