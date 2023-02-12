import React from "react";
import HWBG from "../../../assets/Hardware/Hardwarebg.jpg";

export default function Hardware() {
  return (
    <div className="hardware">
      <img src={HWBG} alt="" />
      <h1 className="text-center mb-5">Hardware</h1>
      <hr />
      <div className="hardware-ps5 hardware-item">
        <div className="row">
          <img
            className="col-4"
            src="https://www.telefonino.net/app/uploads/2021/02/Telefonino.net-IV-2160x1350-16.jpg"
            alt=""
          />
          <div className="col-6">
            <h2>PlayStation 5</h2>
            <p>
              Sony's new generation gaming console is designed with soft curves,
              creating subtle elegance, and still carrying the Gaming quality of
              the machine.
            </p>
            <button className="btn">Learn more</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="hardware-ps4 row hardware-item ">
        <img
          className="col-4"
          src="https://product.hstatic.net/1000190106/product/upload_4446ab7c35824a6c83d90f199cb57fbc.jpg"
          alt=""
        />
        <div className="col-6">
          <h2>PlayStation 4</h2>
          <p>
            Sony's new generation gaming console is designed with soft curves,
            creating subtle elegance, and still carrying the Gaming quality of
            the machine.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <hr />
      <div className="hardware-vr2 row hardware-item ">
        <img
          className="col-4"
          src="https://gmedia.playstation.com/is/image/SIEPDC/vr2-hardware?fmt=png-alpha&scl=1"
          alt=""
        />
        <div className="col-6">
          <h2>PlayStation VR2</h2>
          <p>
            Sony's new generation gaming console is designed with soft curves,
            creating subtle elegance, and still carrying the Gaming quality of
            the machine.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <hr />
      <div className="hardware-dualsense row hardware-item ">
        <img
          className="col-4"
          src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$"
          alt=""
        />
        <div className="col-6">
          <h2>Dual Sense</h2>
          <p>
            Sony's new generation gaming console is designed with soft curves,
            creating subtle elegance, and still carrying the Gaming quality of
            the machine.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <hr />
      <div className="hardware-headset row hardware-item mb-5">
        <img
          className="col-4"
          src="https://gmedia.playstation.com/is/image/SIEPDC/3d-pulse-headset-product-thumbnail-01-en-14sep21?$facebook$"
          alt=""
        />
        <div className="col-6">
          <h2>Headset</h2>
          <p>
            Sony's new generation gaming console is designed with soft curves,
            creating subtle elegance, and still carrying the Gaming quality of
            the machine.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}
