import React from "react";

function CurrencyInput({ amount, currency, currencies, onAmountChange, onCurrencyChange }) {
  return (
    <div className="currency-box">

      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />

    </div>
  );
}

export default CurrencyInput;