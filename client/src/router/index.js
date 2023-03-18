import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../view/layout/MainLayout";
import AdminLayout from "../view/layout/AdminLayout";

import HomePage from "../view/main/Home/Home";
import GamesPage from "../view/main/Game/Game";
import PlayStationPage from "../view/main/PlayStation/PlaySattion";
import AccessoryPage from "../view/main/Accessory/Accessory";
import NewsPage from "../view/main/News/News";

import SearchPage from "../view/main/Search/Search";
import CartPage from "../view/main/Cart/Cart";

import LoginPage from "../view/admin/Login/Login";
import RegisterPage from "../view/admin/Register/Register";

import ProductDetailPage from "../view/main/ProductDetail/ProductDetail";

import NotFound from "../view/main/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/playstation",
        element: <PlayStationPage />,
      },
      {
        path: "/accessory",
        element: <AccessoryPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:type/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
