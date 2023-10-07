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
      // Add more datasets for additional categories if needed
    ],
  };
};

const StackedBarChart = ({ passdata }) => {
  const chartData = prepareStackedBarChartData(passdata);

  return (
    <div className="h-[550px] flex  w-full justify-center m-2 p-2">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          legend: {
            position: "top",
          },
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        }}
      />
    </div>
  );
};

export default StackedBarChart;
