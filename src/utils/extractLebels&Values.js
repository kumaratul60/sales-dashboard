import { formatNumber } from "./formatNum";

export const extractLabelsAndValues = (data) => {
  const labels = [];
  const values = [];
  const formattedValues = [];

  // Iterate over the first data entry to extract labels
  for (const key in data[0]) {
    if (typeof data[0][key] === "number" && key !== "Impact") {
      labels.push(key);
      const totalValue = data.reduce((acc, entry) => acc + entry[key], 0);
      values.push(totalValue);

      formattedValues.push(formatNumber(totalValue));
    }
  }

  return { labels, values, formattedValues };
};
