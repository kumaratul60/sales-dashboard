import Papa from "papaparse";
import CSV from "../data/sales_data.csv";

const loadCSVData = () => {
  console.log("csvdata:", CSV);
  return new Promise((resolve, reject) => {
    Papa.parse(CSV, {
      header: true,
      download: false,
      dynamicTyping: true,
      // transformHeader: (header) => header.replace(/\s/g, "_"), // Replace spaces with underscores
      complete: (result) => {
        if (result.errors.length > 0) {
          reject(new Error("Error parsing CSV"));
        } else {
          resolve(result.data);
        }
      },
    });
  });
};

export default loadCSVData;
