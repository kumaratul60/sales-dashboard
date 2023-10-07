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

  return (
    <div className="h-[550px] flex  w-full justify-center m-2 p-2">
      <Line
        data={chartData}
        options={{
          responsive: true,
          legend: {
            display: false,
          },
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
