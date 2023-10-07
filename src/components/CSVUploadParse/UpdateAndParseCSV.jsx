import React, { useState } from "react";
import Papa from "papaparse"; // For parsing CSV
import { saveAs } from "file-saver"; // For saving the updated CSV

const UpdateAndParseCSV = () => {
  const [csvData, setCsvData] = useState([]);
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        console.log({ result });
        setCsvData(result.data);
      },
    });
  };

  const updateCSV = () => {
    // Modify csvData with updated data
    const updatedData = [...csvData, { name: "John Keets", age: 30 }];

    const updatedCSV = Papa.unparse(updatedData);

    // Save the updated CSV as a file
    const blob = new Blob([updatedCSV], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "updated_file.csv");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      <button onClick={updateCSV}>Update CSV</button>
      <div>
        <h2>CSV Data:</h2>
        <ul>
          {csvData.map((row, index) => (
            <li key={index}>{JSON.stringify(row)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpdateAndParseCSV;
