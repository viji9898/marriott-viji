import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./app/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
