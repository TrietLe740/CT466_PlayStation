import { RouterProvider } from "react-router-dom";
import Router from "./router/index";
import "./index.css";

export default function App() {
  return <RouterProvider router={Router} />;
}
