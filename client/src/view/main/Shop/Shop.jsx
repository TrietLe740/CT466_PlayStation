import React from "react";
import SHOPBG from "../../../assets/Shop/Shop_bg.jpg";
import ProductCard from "../../../components/Shop/ProductCard";

export default function Shop() {
  return (
    <div className="shop-container">
      <img src={SHOPBG} alt="" />
      <h1 className="ml-5 mt-5">Shop PS5 Consoles from PlayStation</h1>
      <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h1 className="ml-5 mt-5">Pre-order PS VR2 now</h1>
      <h1 className="ml-5 mt-5">PS5 Accessories to Love</h1>
    </div>
  );
}
