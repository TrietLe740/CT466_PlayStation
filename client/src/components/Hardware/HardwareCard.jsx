import { Link } from "react-router-dom";

import "../../view/main/PlayStation/playstation.css";

export default function HardwareCard({ hardware }) {
  return (
    <div className="hardware-card card col-4 m-0">
      <Link to={`/product/${hardware.type}/${hardware._id}`}>
        <img
          src={hardware.img}
          className="card-img-top product-card-img"
          alt=""
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title text-center">{hardware.name}</h5>
        <Link to={`/product/${hardware.type}/${hardware._id}`} className="btn">
          Find out more
        </Link>
        <span className="hardware-price">{hardware.price}$</span>
      </div>
    </div>
  );
}
