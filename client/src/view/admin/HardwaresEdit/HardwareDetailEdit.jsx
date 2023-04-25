import { Link, useParams } from "react-router-dom";
import "./hardwaredetailedit.css";
import { useEffect, useState } from "react";
import PlayStationService from "../../../services/playstation.service";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function HardwareDetailEdit() {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  let productId = useParams();

  const playstationServ = new PlayStationService();

  const [product, setProduct] = useState();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  async function getProduct() {
    let item = await playstationServ.get(productId.id);
    setProduct(item);
  }

  function updateProduct(payload) {
    console.log(payload);
    setProduct((state) => {
      return {
        ...state,
        ...payload,
      };
    });
  }

  const handleUpdate = async (id, data) => {
    try {
      await playstationServ.update(productId.id, product);
      // console.log(product);
      alert("Update succesfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await playstationServ.delete(id);
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
        <h2>Review:</h2>
        <div className="row">
          <div className="product-detail-left col-6 mt-3">
            <img src={product?.img} alt="" />
          </div>
          <div className="product-detail-right col-6 mt-5">
            <h2 className="mb-5">{product?.name}</h2>
            <span className="price display-3 h3">
              {product?.price - product?.sale || ""}$
            </span>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>

      <div className="col-6 p-5">
        <h2>Edit:</h2>
        <form
          onSubmit={handleSubmit((data) => {
            handleUpdate(productId.id, data);
          })}
        >
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={product?.name}
              onChange={(e) => {
                updateProduct({ name: e.target.value });
              }}
            />
            {/* <p className="warning">{errors.name?.message}</p>
            <p className="warning">{nameError}</p> */}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={product?.price}
              onChange={(e) => {
                updateProduct({ price: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sale">Sale</label>
            <input
              className="form-control"
              type="text"
              name="sale"
              value={product?.sale}
              onChange={(e) => {
                updateProduct({ sale: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input
              className="form-control"
              type="text"
              value={product?.img}
              name="img"
              onChange={(e) => {
                updateProduct({ img: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Desciption</label>
            <textarea
              className="form-control"
              name="description"
              value={product?.description}
              onChange={(e) => {
                updateProduct({ description: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <fieldset>
              <label>Type</label>
              <div>
                <input
                  type="radio"
                  checked={product?.type === "hardware"}
                  onChange={() => {
                    updateProduct({ type: "hardware" });
                  }}
                  name="type"
                  id="hardware"
                  className="mr-1"
                  value="hardware"
                />
                <label htmlFor="hardware" className="m-0 mr-5">
                  Hardware
                </label>
                <input
                  type="radio"
                  checked={product?.type === "accessory"}
                  onChange={() => {
                    updateProduct({ type: "accessory" });
                  }}
                  name="type"
                  id="accessory"
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
                    Are you sure to delete this product?
                  </p>
                  <p className="row p-3">
                    <Link
                      to={`/admin/hardwares`}
                      className="btn col-4 bg-danger border-danger text-white"
                      onClick={() => {
                        handleDelete(product?._id);
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

export default HardwareDetailEdit;
