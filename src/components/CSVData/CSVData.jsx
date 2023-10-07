import { useEffect } from "react";
import { transformDataForCharting } from "../../utils/transformData";
import loadCSVData from "../../utils/loadCSVData";

const CSVData = () => {
  useEffect(() => {
    // Load CSV data and transform for charting
    loadCSVData()
      .then((csvData) => {
        const transformedData = transformDataForCharting(csvData);
        console.log("Transformed Data:", transformedData);
        // Use the transformed data for rendering charts
      })
      .catch((error) => {
        console.error("Error loading CSV data:", error);
      });
  }, []);

  return <div className="font-bold text-center">CSV DATA</div>;
};

export default CSVData;
