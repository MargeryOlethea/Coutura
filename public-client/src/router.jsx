import { createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProductDetailPage from "./views/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);
