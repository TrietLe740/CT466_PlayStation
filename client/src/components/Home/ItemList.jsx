import React from "react";
import ITEMBG from "../../assets/Home/Itemlistbg.webp";

export default function ItemList() {
  return (
    <div>
      <img className="item-list-img" src={ITEMBG} alt="" />
      <div className="let-play">
        <img
          className="let-play-left"
          src="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
          alt=""
        />
        <div className="let-play-right">
          <h2>
            Let's play blockbuster game <br /> with PS5
          </h2>
          <span>
            Selected PS5 games become come alive on HDR-enabled TVs with Rich
            color gamut creates the ultimate discovery experience
          </span>
        </div>
      </div>
      <div className="item-list row">
        <div className="item col-3">
          <img
            className="item-img"
            src="https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg"
            alt=""
          />
          <h3 className="text-center">PS5</h3>
        </div>
        <div className="item col-3">
          <img
            className="item-img"
            src="https://media.direct.playstation.com/is/image/sierialto/PS4-slim-console-standing-with-dualshock4?$Background_Large$"
            alt=""
          />
          <h3 className="text-center">PS4</h3>
        </div>
        <div className="item col-3">
          <img
            className="item-img"
            src="https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Sense-Charging-Station-with-controllers-hero?$Background_Large$"
            alt=""
          />
          <h3 className="text-center">VR2 Sense</h3>
        </div>
        <div className="item col-3">
          <img
            className="item-img"
            src="https://media.direct.playstation.com/is/image/sierialto/PS-VR2-Hero?$Background_Large$"
            alt=""
          />
          <h3 className="text-center">PS VR2</h3>
        </div>
      </div>
    </div>
  );
}
