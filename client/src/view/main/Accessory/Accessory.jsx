import React, { useEffect, useState } from "react";
import HardwareCard from "../../../components/Hardware/HardwareCard";
import playstationService from "../../../services/playstation.service";

import "./accessory.css";

export default function Accessory() {
  const [hardwareList, setHardwareList] = useState();

  const playstationServ = new playstationService();

  useEffect(() => {
    async function getProduct() {
      const products = await playstationServ.getAll();
      const accessory = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].type === "accessory") {
          accessory[i] = products[i];
        }
      }
      setHardwareList(accessory);
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
