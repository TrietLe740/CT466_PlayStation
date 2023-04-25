import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InvoiceService from "../../../services/invoice.service";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function HardwareDetailEdit() {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  let invoiceId = useParams();

  const invoice = new InvoiceService();

  const [item, setItem] = useState();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  async function getInvoice() {
    let item = await invoice.get(invoiceId.id);
    setItem(item);
  }

  function updateStatus(payload) {
    console.log(payload);
    setItem((state) => {
      return {
        ...state,
        ...payload,
      };
    });
  }

  const handleUpdate = async (id, data) => {
    try {
      await invoice.update(invoiceId.id, item);
      alert("Update succesfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await invoice.delete(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInvoice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row product_edit_container">
      <div className="col-8 p-5">
        <h2>Invoice Detail:</h2>
        <div className="table mt-1 ">
          <div className="table-body">
            <ul>
              <li>ID: {item?._id}</li>
              <li>Name: {item?.name}</li>
              <li>Email: {item?.email}</li>
            </ul>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr className="text-center">
                    <th>Product's Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Sale</th>
                    <th>Quantity</th>
                  </tr>
                  {item?.cartItems &&
                    item?.cartItems.map((value, index) => {
                      return (
                        <tr key={index} hardware={value}>
                          <td>{value?.name}</td>
                          <td>
                            <img className="pic" src={value?.img} alt="" />
                          </td>
                          <td>{value?.price}$</td>
                          <td>{value?.sale}$</td>
                          <td>{value?.quantity}</td>
                        </tr>
                      );
                    })}
                </thead>
              </table>
              <h5 className="text-right mt-3">
                Total Amout: {item?.totalAmount}$
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4 p-5">
        <h2>Update Status:</h2>
        <form
          onSubmit={handleSubmit((data) => {
            handleUpdate(invoiceId.id, data);
          })}
        >
          <div className="form-group">
            <fieldset className="mt-4">
              <ul>
                <li>
                  <input
                    type="radio"
                    checked={item?.status === "To Pay"}
                    onChange={() => {
                      updateStatus({ status: "To Pay" });
                    }}
                    name="status"
                    className="mr-1"
                    value="To Pay"
                    id="toPay"
                  />
                  <label htmlFor="toPay" className="m-0">
                    To Pay
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    checked={item?.status === "To Ship"}
                    onChange={() => {
                      updateStatus({ status: "To Ship" });
                    }}
                    name="status"
                    className="mr-1"
                    value="To Ship"
                    id="toShip"
                  />
                  <label htmlFor="toShip" className="m-0">
                    To Ship
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    checked={item?.status === "To Receive"}
                    onChange={() => {
                      updateStatus({ status: "To Receive" });
                    }}
                    name="status"
                    className="mr-1"
                    value="To Receive"
                    id="toReceive"
                  />
                  <label htmlFor="toReceive" className="m-0">
                    To Receive
                  </label>
                </li>

                <li>
                  <input
                    type="radio"
                    checked={item?.status === "Done"}
                    onChange={() => {
                      updateStatus({ status: "Done" });
                    }}
                    name="status"
                    className="mr-1"
                    value="Done"
                    id="done"
                  />
                  <label htmlFor="done" className="m-0">
                    Done
                  </label>
                </li>
              </ul>
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
                    Are you sure to delete this invoice?
                  </p>
                  <p className="row p-3">
                    <Link
                      to={`/admin/invoices`}
                      className="btn col-4 bg-danger border-danger text-white"
                      onClick={() => {
                        handleDelete(item?._id);
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
