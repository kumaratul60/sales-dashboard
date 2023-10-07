export const generateMultipleColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    // Generate a random color
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colors.push(color);
  }
  return colors;
};

export const getSingleRandomColor = () => {
  const letters = "0123456789ABCDEF";
  const colors = [];
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  colors.push(color);
};
