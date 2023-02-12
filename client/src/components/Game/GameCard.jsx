import React from "react";

export default function GameCard() {
  return (
    <div className="card">
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">God of war</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/#" className="btn btn-primary">
          Find out more
        </a>
      </div>
    </div>
  );
}
