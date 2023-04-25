import { useForm } from "react-hook-form";
import PlayStationService from "../../../services/playstation.service";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";

function HardwareCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const playstationServ = new PlayStationService();

  const submitBtnRef = useRef();

  const navigator = useNavigate();

  return (
    <div className="p-5 mt-5">
      <h2 className="mt-5">Create new hardware product</h2>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            const createResult = await playstationServ.create(data);
            console.log(createResult);
            navigator(`/admin/hardwares`);
          } catch (error) {
            alert("Error to create new product");
            console.log(error);
          }
        })}
      >
        <div className="form-group">
          <label htmlFor="name">Product Name</label>

          <input
            {...register("name", { required: "*This is require" })}
            className="form-control"
            type="text"
            name="name"
          />
          <p className="warning">{errors.name?.message}</p>
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="price">Price</label>

            <input
              {...register("price", { required: "*This is require" })}
              className="form-control"
              type="text"
              name="price"
            />
            <p className="warning">{errors.price?.message}</p>
          </div>
          <div className="form-group col-6">
            <label htmlFor="sale">Sale</label>
            <input
              {...register("sale", { required: "*This is require" })}
              className="form-control"
              type="text"
              name="sale"
            />
            <p className="warning">{errors.sale?.message}</p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image</label>
          <input
            {...register("img", { required: "*This is require" })}
            className="form-control"
            type="text"
            name="img"
          />
          <p className="warning">{errors.img?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Desciption</label>
          <textarea
            name="description"
            className="form-control"
            {...register("description", { required: "*This is require" })}
          ></textarea>
          <p className="warning">{errors.description?.message}</p>
        </div>
        <div className="form-group">
          <fieldset>
            <label>Type</label>
            <div>
              <input
                {...register("type")}
                type="radio"
                name="type"
                className="mr-1"
                value="hardware"
              />
              <label htmlFor="hardware" className="m-0 mr-5">
                Hardware
              </label>
              <input
                {...register("type")}
                type="radio"
                name="type"
                className="mr-1"
                value="accessory"
              />
              <label htmlFor="accessory" className="m-0">
                Accessory
              </label>
            </div>
          </fieldset>
        </div>
        <div className="form-group">
          <Popup
            position="top center"
            open={open}
            closeOnDocumentClick
            onClose={closeModal}
            modal
            trigger={<span className="ml-2 btn">Create</span>}
          >
            {(close) => (
              <div className="popup-register">
                <p className="text-success">
                  Are you sure to create this product?
                </p>
                <p className="row p-3">
                  <button
                    className="btn bg-success text-white border-success col-4"
                    onClick={() => {
                      submitBtnRef.current?.click();
                      close();
                    }}
                  >
                    Sure
                  </button>
                  <Link className="btn col-4" onClick={close}>
                    Cancel
                  </Link>
                </p>
              </div>
            )}
          </Popup>
        </div>
        <button type="submit" ref={submitBtnRef}></button>
      </form>
    </div>
  );
}

export default HardwareCreate;
