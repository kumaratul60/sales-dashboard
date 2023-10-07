import { Pie } from "react-chartjs-2";
import { extractLabelsAndValues } from "../../utils/extractLebels&Values";
import {
  generateMultipleColors,
  getSingleRandomColor,
} from "../../utils/generatesColor";
import { useEffect, useState } from "react";

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

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="h-[400px] w-full p-4 bg-white rounded-lg">
        <Pie data={chartData} options={chartOptions} />
      </div>

    </>
  );
};

export default PieChart;
