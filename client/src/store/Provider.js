import { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cartItem")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("cartItem", JSON.stringify(cart) || []);
  }, [cart]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const a = JSON.parse(window.localStorage.getItem("cartItem"));

      if (a) {
        setCart(a);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
}

export default Provider;
