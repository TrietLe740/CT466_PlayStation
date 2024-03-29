import { useContext, useEffect, useState } from "react";
import Context from "../../../store/Context";
import ItemCard from "../../../components/Cart/ItemCard";
import "./cart.css";

import InvoiceService from "../../../services/invoice.service";
import { useNavigate } from "react-router-dom";

function Cart() {
  const invoiceServ = new InvoiceService();

  const [totalAmount, setTotalAmount] = useState(0);

  const { cart, setCart, auth } = useContext(Context);

  useEffect(() => {
    let total = 0;
    cart.forEach((element) => {
      total += element.price * element.quantity;
    });
    console.log(cart);
    setTotalAmount(total);
  }, [cart]);

  const navigate = useNavigate();

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      if (auth !== null) {
        if (cart.length !== 0) {
          await invoiceServ.create({
            user_id: auth._id,
            email: auth.email,
            name: auth.name,
            cartItems: cart,
            totalAmount,
          });
          setCart([]);
          alert("Checkout success!");
        }
      } else {
        alert("You need to login!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="cart-container">
      <div className="row">
        <div className="col-8">
          <p className="pb-2 fw-bold mt-3 ml-4">Order</p>
          <div className="card">
            <div className="table-responsive px-4">
              <table className="table table-borderless">
                <tbody>
                  {cart.map((e, index) => {
                    return <ItemCard key={e.id} value={e} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <form
          className="col-4 payment-summary"
          onSubmit={(e) => {
            handleCheckout(e);
          }}
        >
          <p className="fw-bold pt-lg-0 pt-4 mt-3 ml-4">Payment Summary</p>
          <div className="card px-md-3 px-2 pt-4">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between py-3">
                <small className="text-muted">Order Summary</small>
                <p>${totalAmount}</p>
              </div>
              <div className="d-flex justify-content-between pb-3">
                <small className="text-muted">Transport Fee</small>
                <p className="font-weight-bold">FREE</p>
              </div>
              <div className="d-flex justify-content-between">
                <small className="text-muted">Total Amount</small>
                <p>${totalAmount}</p>
              </div>
            </div>
            <div className="row">
              <button type="submit" className="col-12 btn mt-2">
                Check Out
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
