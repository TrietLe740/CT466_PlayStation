import React from "react";
import Game from "../../assets/Game/GoW.jpg";

export default function GameCardHome() {
  return (
    <div className="card">
      <img src={Game} className="card-img-top  game-card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">God of war</h5>
      </div>
    </div>
  );
}
