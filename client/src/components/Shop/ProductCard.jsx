import React from "react";

export default function ProductCard() {
  return (
    <div className="post-card card col-4 m-0">
      <img
        src="https://media.direct.playstation.com/is/image/sierialto/GOWR-Bundle-Hero-US?$FourColumn_Large$"
        className="card-img-top  product-card-img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">
          PlayStation®5 Console – God of War™ Ragnarok
        </h5>
        <a href="/#" className="btn btn-primary">
          Add <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  );
}
