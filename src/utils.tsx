export const twoDecimalPlaces = (number: number) =>
  (Math.round(number * 100) / 100).toFixed(2);
