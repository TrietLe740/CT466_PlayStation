import { useEffect, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cartItem")) || []
  );
  const [auth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem("auth")) || null
  );
  const [admin, setAdmin] = useState(
    JSON.parse(window.localStorage.getItem("admin")) || null
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
    setIsLogin(!!auth);
  }, [auth]);

  useEffect(() => {
    window.localStorage.setItem("admin", JSON.stringify(admin) || "");
    // setIsLogin(!!admin);
  }, [admin]);

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        auth,
        setAuth,
        admin,
        setAdmin,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
