import { formatNumber } from "../../utils/formatNum";

const HomePage = ({ data }) => {
  const totalSalesArray = data.map((item) => item["Total Sales"]);
  const totalInvestmentArray = data.map((item) => item["Total Investment"]);
  const totalImpactArray = data.map((item) => item["Impact"]);

  // Calculate the total values
  const totalSales = totalSalesArray.reduce((acc, val) => {
    const numericValue = parseFloat(val);
    return isNaN(numericValue) ? acc : acc + numericValue;
  }, 0);

  const totalInvestment = totalInvestmentArray.reduce((acc, val) => {
    const numericValue = parseFloat(val);
    return isNaN(numericValue) ? acc : acc + numericValue;
  }, 0);
  const totalImpact = totalImpactArray.reduce((acc, val) => {
    const numericValue = parseFloat(val);
    return isNaN(numericValue) ? acc : acc + numericValue;
  }, 0);

  // Calculate overall ROI
  const overallROI = ((totalSales - totalInvestment) / totalInvestment) * 100;

  return (
    <div className="flex flex-wrap justify-around p-3 m-2 mt-8 bg-gray-800 rounded-lg shadow-lg">
      {/* Tile for Total Sales */}
      <div className="w-1/4 p-6 m-2 text-white bg-blue-500 rounded-lg ">
        <div className="text-2xl">{`$${formatNumber(
          totalSales.toFixed(2)
        )}`}</div>
        <div>Total Sales</div>
      </div>

      {/* Tile for Total Spend */}
      <div className="w-1/4 p-6 m-2 text-white bg-green-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(
          totalInvestment.toFixed(2)
        )}`}</div>
        <div>Total Spend</div>
      </div>

      {/* Tile for Total Impact */}
      <div className="w-1/4 p-6 m-2 text-white bg-indigo-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(
          totalImpact.toFixed(2)
        )}`}</div>
        <div>Total Impact</div>
      </div>

      {/* Tile for ROI */}
      <div className="w-1/4 p-6 m-2 text-white bg-yellow-500 rounded-lg">
        <div className="text-2xl">{`${overallROI.toFixed(2)}%`}</div>
        <div>ROI</div>
      </div>
    </div>
  );
};

export default HomePage;
