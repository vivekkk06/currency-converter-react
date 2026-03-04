export const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

export const fetchRates = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.rates;
};