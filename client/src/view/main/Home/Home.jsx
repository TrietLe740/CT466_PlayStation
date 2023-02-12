import React from "react";
import PlayStation from "../../../components/Home/PlayStation5";
import GameHome from "../../../components/Home/GameHome";
import ItemList from "../../../components/Home/ItemList";
import "./home.css";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <PlayStation />
      <ItemList />
      <GameHome />
    </Fragment>
  );
}
