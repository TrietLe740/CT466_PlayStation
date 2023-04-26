import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../view/layout/MainLayout";
import AdminLayout from "../view/layout/AdminLayout";

import HomePage from "../view/main/Home/Home";
import GamesPage from "../view/main/Game/Game";
import PlayStationPage from "../view/main/PlayStation/PlaySattion";
import AccessoryPage from "../view/main/Accessory/Accessory";
import NewsPage from "../view/main/News/News";

import ProductDetailPage from "../view/main/ProductDetail/ProductDetail";
import NewDetailPage from "../view/main/News/NewDetail";

import SearchPage from "../view/main/Search/Search";
import CartPage from "../view/main/Cart/Cart";

import LoginPage from "../view/main/Login/Login";
import AdminLoginPage from "../view/admin/AdminLogin/AdminLogin";
import RegisterPage from "../view/main/Register/Register";

import AdminPage from "../view/admin/AdminDashboard/AdminDashboard";
import UsersEditPage from "../view/admin/UsersEdit/UsersEdit";
import UserDetailEditPage from "../view/admin/UsersEdit/UserDetailEdit";

import HardwareEditPage from "../view/admin/HardwaresEdit/HardwaresEdit";
import HardwaresDatailEditPage from "../view/admin/HardwaresEdit/HardwareDetailEdit";
import HardwareCreatePage from "../view/admin/HardwaresEdit/HardwareCreate";

import GamesEditPage from "../view/admin/GamesEdit/GamesEdit";
import GameDetailEditPage from "../view/admin/GamesEdit/GameEditDetail";
import GameCreatePage from "../view/admin/GamesEdit/GameCreate";

import NewsEditPage from "../view/admin/NewsEdit/NewsEdit";
import NewDetailEditPage from "../view/admin/NewsEdit/NewDetailEdit";
import NewCreatePage from "../view/admin/NewsEdit/NewCreate";

import InvoicesEditPage from "../view/admin/InvoicesEdit/InvoicesEdit";
import InvoiceDetailEditPage from "../view/admin/InvoicesEdit/InvoiceDetailEdit";

import NotFound from "../view/main/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      // Dashboard
      {
        path: "/admin",
        element: <AdminPage />,
      },
      // Users
      {
        path: "/admin/users",
        element: <UsersEditPage />,
      },
      {
        path: "/admin/users/:id",
        element: <UserDetailEditPage />,
      },
      // Hardwares
      {
        path: "/admin/hardwares",
        element: <HardwareEditPage />,
      },
      {
        path: "/admin/hardwares/:id",
        element: <HardwaresDatailEditPage />,
      },
      {
        path: "/admin/hardwares/create",
        element: <HardwareCreatePage />,
      },
      // Games
      {
        path: "/admin/games",
        element: <GamesEditPage />,
      },
      {
        path: "/admin/games/:id",
        element: <GameDetailEditPage />,
      },
      {
        path: "/admin/games/create",
        element: <GameCreatePage />,
      },
      // News
      {
        path: "/admin/news",
        element: <NewsEditPage />,
      },
      {
        path: "/admin/news/:id",
        element: <NewDetailEditPage />,
      },
      {
        path: "/admin/news/create",
        element: <NewCreatePage />,
      },
      // Invoices
      {
        path: "/admin/invoices",
        element: <InvoicesEditPage />,
      },
      {
        path: "/admin/invoices/:id",
        element: <InvoiceDetailEditPage />,
      },
    ],
  },
  {
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin/login",
        element: <AdminLoginPage />,
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
        path: "/news/:id",
        element: <NewDetailPage />,
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
