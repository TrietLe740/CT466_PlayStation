import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../../../services/auth.service";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UserDetailEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let userId = useParams();

  const authServ = new AuthService();

  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  async function getProduct() {
    let item = await authServ.get(userId.id);
    setUser(item);
  }

  function updateUser(payload) {
    console.log(payload);
    setUser((state) => {
      return {
        ...state,
        ...payload,
      };
    });
  }

  const handleUpdate = async (id, data) => {
    try {
      await authServ.update(userId.id, user);
      // console.log(user);
      alert("Update succesfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await authServ.delete(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row product_edit_container">
      <div className="col-6 p-5">
        <h2>User Information:</h2>
        <div className="row">
          <div className="user-detail-right col-6">
            <p>User ID: {user?._id}</p>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Password: {user?.password}</p>
          </div>
        </div>
      </div>

      <div className="col-6 p-5">
        <h2>Edit:</h2>
        <form
          onSubmit={handleSubmit((data) => {
            handleUpdate(userId.id, data);
          })}
        >
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              {...register("name", { required: "*This is require" })}
              className="form-control"
              type="text"
              name="name"
              value={user?.name}
              onChange={(e) => {
                updateUser({ name: e.target.value });
              }}
            />
            <p className="warning">{errors.name?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: "*This is require" })}
              className="form-control"
              type="email"
              name="email"
              value={user?.email}
              onChange={(e) => {
                updateUser({ email: e.target.value });
              }}
            />
            <p className="warning">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                minLength: {
                  value: 5,
                  message: "*Min length is 5",
                },
              })}
              className="form-control"
              type="text"
              name="password"
              value={user?.password}
              onChange={(e) => {
                updateUser({ password: e.target.value });
              }}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>

            <Popup
              position="top center"
              open={open}
              closeOnDocumentClick
              onClose={closeModal}
              modal
              trigger={<span className="ml-2 btn btn-danger">Delete</span>}
            >
              {(close) => (
                <div className="popup-register">
                  <p className="text-success">
                    Are you sure to delete this user?
                  </p>
                  <p className="row p-3">
                    <Link
                      to={`/admin/users`}
                      className="btn col-4 bg-danger border-danger text-white"
                      onClick={() => {
                        handleDelete(user?._id);
                      }}
                    >
                      Sure
                    </Link>
                    <Link className="btn col-4" onClick={close}>
                      Cancel
                    </Link>
                  </p>
                </div>
              )}
            </Popup>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetailEdit;
