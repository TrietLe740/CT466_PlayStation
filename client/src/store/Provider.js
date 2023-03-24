import { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cartItem")) || []
  );
  const [auth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem("auth")) || {}
  );

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("cartItem", JSON.stringify(cart) || []);
  }, [cart]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const dataOtherTab = JSON.parse(window.localStorage.getItem("cartItem"));

      if (dataOtherTab) {
        setCart(dataOtherTab);
      }
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(auth) || "");
    setIsLogin(!!Object.keys(auth).length);
  }, [auth]);

  return (
    <Context.Provider
      value={{ cart, setCart, auth, setAuth, isLogin, setIsLogin }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
