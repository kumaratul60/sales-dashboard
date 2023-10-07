import { Pie } from "react-chartjs-2";
import { extractLabelsAndValues } from "../../utils/extractLebels&Values";
import {
  generateMultipleColors,
  getSingleRandomColor,
} from "../../utils/generatesColor";
import { formatNumber } from "../../utils/formatNum";

const prepareChartData = (data) => {
  const { labels, values } = extractLabelsAndValues(data);
  const numColorsNeeded = labels.length;
  const backgroundColor = generateMultipleColors(numColorsNeeded);
  const hoverBackgroundColor = generateMultipleColors(numColorsNeeded);

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor,
        hoverBackgroundColor,
        hoverOffset: 4,
      },
    ],
  };
};

const PieChart = ({ passdata }) => {
  const chartData = prepareChartData(passdata);

  return (
    <div className="h-[600px] flex  w-full justify-center m-2 p-2">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Contribution by Channel",
          },
        }}
      />
    </div>
  );
};

export default PieChart;
