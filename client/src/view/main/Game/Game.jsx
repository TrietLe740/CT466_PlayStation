import React, { Fragment, useEffect, useState } from "react";

import BestGameAds from "../../../components/Game/BestGameAds";
import GameCard from "../../../components/Game/GameCard";
import gameService from "../../../services/game.service";

import "./game.css";

export default function Game() {
  const [gameList, setGameList] = useState();

  const gameServ = new gameService();

  async function getProduct() {
    const products = await gameServ.getAll();
    setGameList(products);
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <BestGameAds />
      <hr />
      <h4 className="ml-5">Game Library</h4>
      <div className="row">
        {gameList &&
          gameList.map((value, index) => {
            return <GameCard key={index} game={value} />;
          })}
      </div>
    </Fragment>
  );
}
