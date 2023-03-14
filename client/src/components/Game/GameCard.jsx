import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div className="card col-3">
      <img src={game.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">{game.discription}</p>
        <Link
          to={`/product/${game.type}/${game._id}`}
          className="btn btn-primary"
        >
          Find out more
        </Link>
      </div>
    </div>
  );
}
