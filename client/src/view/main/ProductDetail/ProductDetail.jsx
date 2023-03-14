import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playstationService from "../../../services/playstation.service";
import gamesService from "../../../services/game.service";
import "./productdetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const playstationServ = new playstationService();
  const gamesServ = new gamesService();

  const [product, setProduct] = useState();

  let productId = useParams();

  async function getProduct() {
    var item;
    if (productId.type === "hardware") {
      item = await playstationServ.get(productId.id);
    } else if (productId.type === "game") {
      item = await gamesServ.get(productId.id);
    }
    setProduct(item);
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="row product-detail-container p-5">
        <div className="product-detail-left col-6 mt-3">
          <img src={product?.img} alt="" />
        </div>
        <div className="product-detail-right col-6 mt-5">
          <h2 className="mb-5">{product?.name}</h2>
          <span className="price display-3 h3">
            {product?.price - product?.sale || ""}$
          </span>
          <p>{product?.discription}</p>
          <br />
          <button className="btn-border pt-2 pb-2 pl-3 pr-3">
            <span className="btn-title mr-1">Add</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <hr />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetail;
