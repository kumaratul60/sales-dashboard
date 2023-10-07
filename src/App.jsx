// import "./App.css";
import { RouterProvider } from "react-router-dom";
// import { Dashboard, HomePage, Navbar } from "./components";
import { dataLog } from "./data/dataSon";
import appRouter from "./router";

function App() {
  const data = dataLog;

  return (
    <div>
      {/* <Navbar /> */}
      {/* <HomePage data={data} />
      <Dashboard dataFill={data} /> */}

      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
