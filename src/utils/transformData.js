export const transformDataForCharting = (data) => {
  // Perform data manipulation, grouping, aggregation as needed
  const transformedData = {
    pieChartData: data,
    stackedBarChartData: data,
    lineChartData: data,
  };
  return transformedData;
};
