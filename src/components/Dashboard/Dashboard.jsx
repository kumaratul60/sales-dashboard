import { Chart, CategoryScale } from "chart.js/auto";
import { LineChart, PieChart, StackedBarChart } from "../Charts";

Chart.register(CategoryScale);

const Dashboard = ({ dataFill }) => {
  return (
    <div className="container p-6 mx-auto ">
      <h2 className="mb-4 text-2xl font-bold">Sales Dashboard</h2>

      {/* Implement Chart 1: Pie Chart */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold">
          Sales by Product (Pie Chart)
        </h3>
        <PieChart passdata={dataFill} />
      </div>
      <hr />

      {/* Implement Chart 2: Stacked Bar Chart */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold">
          Total Sales and Investment by Product (Stacked Bar Chart)
        </h3>
        <StackedBarChart passdata={dataFill} />
      </div>
      <hr />
      {/* Implement Chart 3: Line Chart */}
      <div>
        <h3 className="mb-2 text-lg font-bold">
          Trend of Sales and Investment over Time (Line Chart)
        </h3>
        <LineChart passdata={dataFill} />
      </div>
    </div>
  );
};

export default Dashboard;
