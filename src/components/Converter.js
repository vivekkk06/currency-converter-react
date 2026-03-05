import React, { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";
import { fetchRates } from "../api";

function Converter() {

  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);

  useEffect(() => {
    async function loadRates() {
      const data = await fetchRates();
      setRates(data);
      setCurrencies(Object.keys(data));
    }

    loadRates();
  }, []);

  useEffect(() => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const result = (fromAmount / rates[fromCurrency]) * rates[toCurrency];
      setToAmount(result.toFixed(2));
    }
  }, [fromAmount, fromCurrency, toCurrency, rates]);

  const handleToAmountChange = (value) => {
    setToAmount(value);
    const result = (value / rates[toCurrency]) * rates[fromCurrency];
    setFromAmount(result.toFixed(2));
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="converter">

      <h2>💱 Currency Converter</h2>

      <div className="section">
        <label>From</label>
        <CurrencyInput
          amount={fromAmount}
          currency={fromCurrency}
          currencies={currencies}
          onAmountChange={setFromAmount}
          onCurrencyChange={setFromCurrency}
        />
      </div>

      <button className="swap-btn" onClick={swapCurrencies}>
        ⇅
      </button>

      <div className="section">
        <label>To</label>
        <CurrencyInput
          amount={toAmount}
          currency={toCurrency}
          currencies={currencies}
          onAmountChange={handleToAmountChange}
          onCurrencyChange={setToCurrency}
        />
      </div>

      <div className="rate-box">
        1 {fromCurrency} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
      </div>

    </div>
  );
}

export default Converter;