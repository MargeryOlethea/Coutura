import { redirect, createBrowserRouter } from "react-router-dom";
import ProductPage from "./views/ProductPage";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./views/LoginPage";
import CategoryPage from "./views/CategoryPage";
import CreateProductPage from "./views/CreateProductPage";
import EditProductPage from "./views/EditProductPage";
import RegisterPage from "./views/RegisterPage";
import UpdateImagePage from "./views/UpdateImagePage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");

      if (access_token) {
        return redirect("/");
      }

      return null;
    },
  },
  {
    element: <RootLayout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");

      if (!access_token) {
        return redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/create",
        element: <CreateProductPage />,
      },
      {
        path: "/products/:id/edit",
        element: <EditProductPage />,
      },
      {
        path: "/products/:id/patch-image",
        element: <UpdateImagePage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/add-user",
        element: <RegisterPage />,
      },
    ],
  },
]);
