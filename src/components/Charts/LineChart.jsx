import { Line } from "react-chartjs-2";
import { extractLabelsAndValues } from "../../utils/extractLebels&Values";
import {
  generateMultipleColors,
  getSingleRandomColor,
} from "../../utils/generatesColor";

const prepareLineChartData = (data) => {
  const { labels, values } = extractLabelsAndValues(data);
  const backgroundColor = generateMultipleColors(labels.length);

  return {
    labels,
    datasets: [
      {
        label: "Trend of Sales and Investment",
        data: values,
        backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 3,
        fill: false,
      },
    ],
  };
};

const LineChart = ({ passdata }) => {
  const chartData = prepareLineChartData(passdata);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: { display: true },
      y: { display: true },
    },
  };

  return (
    <div className="h-[400px] w-full p-4 bg-white rounded-lg ">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
