export const formatNumber = (number) => {
  const THOUSANDS = 1000;
  const MILLIONS = 1000 * THOUSANDS;
  const BILLIONS = 1000 * MILLIONS;

  let formattedNumber;

  switch (true) {
    case number >= BILLIONS:
      formattedNumber = Math.round(number / BILLIONS) + "B";
      break;
    case number >= MILLIONS:
      formattedNumber = Math.round(number / MILLIONS) + "M";
      break;
    case number >= THOUSANDS:
      formattedNumber = Math.round(number / THOUSANDS) + "k";
      break;
    default:
      formattedNumber = number.toString();
  }

  return formattedNumber;
};
