import { formatNumber } from "../../utils/formatNum";

const HomePage = ({ data }) => {
  const totalSalesArray = data.map((item) => item["Total Sales"]);
  const totalInvestmentArray = data.map((item) => item["Total Investment"]);
  const totalImpactArray = data.map((item) => item["Impact"]);

  const calculateTotal = (values) => {
    return values.reduce((acc, val) => {
      const numericValue = parseFloat(val);
      return isNaN(numericValue) ? acc : acc + numericValue;
    }, 0);
  };

  const totalSales = calculateTotal(totalSalesArray);
  const totalInvestment = calculateTotal(totalInvestmentArray);
  const totalImpact = calculateTotal(totalImpactArray);

  const prot = totalSales - totalInvestment;

  const overallROI = ((totalSales - totalInvestment) / totalInvestment) * 100;

  return (
    <div className="flex flex-wrap justify-between p-3 mt-0.5 bg-gray-800 shadow-lg h-[90vh] md:h-[87vh] lg:h-[92vh]">
      {/* Tile for Total Sales */}
      <div className="w-full sm:w-1/2 md:w-1/4 h-32 p-6 m-2 text-center text-white bg-blue-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(
          totalSales.toFixed(2)
        )}`}</div>
        <p className="pt-2">Total Sales</p>
      </div>

      {/* Tile for Total Spend */}
      <div className="w-full sm:w-1/2 md:w-1/4 h-32 p-6 m-2 md:mt-[10%] text-center text-white bg-green-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(
          totalInvestment.toFixed(2)
        )}`}</div>
        <p className="pt-2">Total Spend</p>
      </div>

      {/* Tile for Total Profit */}
      <div className="w-full sm:w-1/2 md:w-1/4 h-32 p-6 m-2 text-center text-white bg-pink-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(prot.toFixed(2))}`}</div>
        <p className="pt-2">Total Profit</p>
      </div>

      {/* Tile for Total Impact */}
      <div className="w-full sm:w-1/2 md:w-1/4 h-32 p-6 m-2 text-center text-white bg-indigo-500 rounded-lg">
        <div className="text-2xl">{`$${formatNumber(
          totalImpact.toFixed(2)
        )}`}</div>
        <p className="pt-2">Total Impact</p>
      </div>

      {/* Tile for ROI */}
      <div className="w-full sm:w-1/2 md:w-1/4 h-32 p-6 m-2 text-center text-white bg-yellow-500 rounded-lg">
        <div className="text-2xl">{`${overallROI.toFixed(2)}%`}</div>
        <p className="pt-2">ROI</p>
      </div>
    </div>
  );
};

export default HomePage;
