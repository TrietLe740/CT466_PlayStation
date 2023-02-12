import React from "react";
import GAMEBG from "../../assets/Home/Gamebg.jpg";
import GameCardHome from "../Home/GameCardHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function GameHome() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="game-home">
        <img className="game-home-img" src={GAMEBG} alt="" />
        <h1 className="text-center text-white mt-4">Top Blockbuster game</h1>
        <div className="game-home-slider">
          <Carousel responsive={responsive}>
            <GameCardHome />
            <GameCardHome />
            <GameCardHome />
            <GameCardHome />
            <GameCardHome />
            <GameCardHome />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
