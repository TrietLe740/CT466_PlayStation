import { useContext, useEffect, useState } from "react";
import Context from "../../../store/Context";
import ItemCard from "../../../components/Cart/ItemCard";
import "./cart.css";

function Cart() {
  const { cart } = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((element) => {
      total += element.price * element.quantity;
    });
    console.log(cart);
    setTotalAmount(total);
  }, [cart]);

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
        <div className="col-4 payment-summary">
          <p className="fw-bold pt-lg-0 pt-4 mt-3 ml-4">Payment Summary</p>
          <div className="card px-md-3 px-2 pt-4">
            <div className="d-flex justify-content-between pb-3">
              <small className="text-muted">Transaction code</small>
              <p className="">VC115665</p>
            </div>
            <div className="d-flex justify-content-between b-bottom">
              <input type="text" className="p-2" placeholder="COUPON CODE" />
              <button className="btn">Apply</button>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between py-3">
                <small className="text-muted">Order Summary</small>
                <p>$122</p>
              </div>
              <div className="d-flex justify-content-between pb-3">
                <small className="text-muted">Transport Fee</small>
                <p>$22</p>
              </div>
              <div className="d-flex justify-content-between">
                <small className="text-muted">Total Amount</small>
                <p>{totalAmount}</p>
              </div>
            </div>
            <div className="row">
              <button className="col-12 btn mt-2">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
