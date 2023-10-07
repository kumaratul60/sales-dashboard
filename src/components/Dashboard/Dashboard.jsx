import { Chart, CategoryScale } from "chart.js/auto";
import { LineChart, PieChart, StackedBarChart } from "../Charts";

Chart.register(CategoryScale);

const Dashboard = ({ dataFill }) => {
  return (
    <div className="container p-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center">Sales Dashboard</h2>

      {/* Implement Chart 1: Pie Chart */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-lg font-bold text-center">
          Sales by Product (Pie Chart)
        </h3>
        <div className="flex justify-center">
          <PieChart passdata={dataFill} />
        </div>
      </div>
      <hr className="my-6" />

      {/* Implement Chart 2: Stacked Bar Chart */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-lg font-bold text-center">
          Total Sales and Investment by Product (Stacked Bar Chart)
        </h3>
        <div className="flex justify-center">
          <StackedBarChart passdata={dataFill} />
        </div>
      </div>
      <hr className="my-6" />

      {/* Implement Chart 3: Line Chart */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-lg font-bold text-center">
          Trend of Sales and Investment over Time (Line Chart)
        </h3>
        <div className="flex justify-center">
          <LineChart passdata={dataFill} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
