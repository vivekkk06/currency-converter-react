export const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";


// this function fetches the exchange rates from the API and returns the rates object
// this sends request to the exchange rate api that above give and then it recieves the response and converts it to json formate and give the rate
export const fetchRates = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.rates;
};