import React, { useEffect, useState } from "react";
import HardwareCard from "../../../components/Hardware/HardwareCard";
import playstationService from "../../../services/playstation.service";

import "./playstation.css";

export default function Hardware() {
  const [hardwareList, setHardwareList] = useState();

  const playstationServ = new playstationService();

  useEffect(() => {
    async function getProduct() {
      const products = await playstationServ.getAll();
      const hardwares = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].type === "hardware") {
          hardwares[i] = products[i];
        }
      }
      setHardwareList(hardwares);
    }

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hardware-container">
      {hardwareList &&
        hardwareList.map((value, index) => {
          return <HardwareCard key={index} hardware={value} />;
        })}
    </div>
  );
}
