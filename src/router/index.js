import { createBrowserRouter } from "react-router-dom";
import { Dashboard, HomePage, ErrorPage, Layout } from "../components";
import { dataLog } from "../data/dataSon";

const data = dataLog;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage data={data} />,
      },
      {
        path: "/dashboard",
        element: <Dashboard dataFill={data} />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default appRouter;
