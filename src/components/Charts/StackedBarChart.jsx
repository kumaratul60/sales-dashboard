import { Bar } from "react-chartjs-2";
import { extractLabelsAndValues } from "../../utils/extractLebels&Values";
import {
  generateMultipleColors,
  getSingleRandomColor,
} from "../../utils/generatesColor";

const prepareStackedBarChartData = (data) => {
  const { labels, values } = extractLabelsAndValues(data);
  const backgroundColor = generateMultipleColors(labels.length);

  return {
    labels,
    datasets: [
      {
        label: "Total Sales",
        data: values,
        backgroundColor,
      },
    ],
  };
};

const StackedBarChart = ({ passdata }) => {
  const chartData = prepareStackedBarChartData(passdata);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to break out of its parent container
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

   

  return (
    <div className="h-[400px] w-full p-4 bg-white rounded-lg ">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default StackedBarChart;
