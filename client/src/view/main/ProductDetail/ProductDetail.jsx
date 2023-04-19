import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../../../store/Context";

import playstationService from "../../../services/playstation.service";
import gamesService from "../../../services/game.service";

import "./productdetail.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const playstationServ = new playstationService();
  const gamesServ = new gamesService();

  const [product, setProduct] = useState();

  const { setCart } = useContext(Context);

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

  function handleAddToCart() {
    const cartItem = {
      quantity: 1,
      id: product._id,
      name: product.name,
      price: product.price,
      sale: product.sale,
      img: product.img,
    };

    setCart((v) => {
      const index = v.findIndex((x) => x.id === product._id);
      if (index !== -1) {
        return v.map((e) => {
          if (e.id === product._id) {
            const quantity =
              parseInt(e.quantity) + 1 > 5 ? 5 : parseInt(e.quantity) + 1;
            return { ...e, quantity };
          }
          return e;
        });
      }
      return [...v, cartItem];
    });
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
          <button
            className="btn-border pt-2 pb-2 pl-3 pr-3"
            onClick={handleAddToCart}
          >
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
