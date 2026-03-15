import React, { useEffect, useState, useRef } from "react";
import { fetchRates } from "../api";

const PAIRS = [
  { from: "USD", to: "INR" },
  { from: "USD", to: "EUR" },
  { from: "USD", to: "GBP" },
  { from: "USD", to: "JPY" },
  { from: "USD", to: "AUD" },
  { from: "USD", to: "CAD" },
  { from: "USD", to: "CHF" },
  { from: "USD", to: "CNY" },
  { from: "USD", to: "SGD" },
  { from: "USD", to: "AED" },
  { from: "EUR", to: "USD" },
  { from: "EUR", to: "GBP" },
  { from: "EUR", to: "JPY" },
  { from: "EUR", to: "INR" },
  { from: "GBP", to: "USD" },
  { from: "GBP", to: "EUR" },
  { from: "GBP", to: "INR" },
  { from: "JPY", to: "USD" },
  { from: "AUD", to: "USD" },
  { from: "CAD", to: "USD" },
];

const CURRENCY_SYMBOLS = {
  USD: "$", EUR: "€", GBP: "£", JPY: "¥", INR: "₹",
  AUD: "A$", CAD: "C$", CHF: "Fr", CNY: "¥", SGD: "S$", AED: "د.إ",
};

export default function TickerBar() {
  const [tickers, setTickers] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);


  const prevRatesRef = useRef({});

  useEffect(() => {
    const loadTicker = async () => {
      try {
        const usdRates = await fetchRates();

        const items = PAIRS.map(({ from, to }) => {
          let rate;
          if (from === "USD") {
            rate = usdRates[to];
          } else {
            // cross rate: from → USD → to
            rate = usdRates[to] / usdRates[from];
          }

          const prev = prevRatesRef.current[`${from}_${to}`];
          const change = prev ? rate - prev : 0;
          const pct = prev ? ((change / prev) * 100).toFixed(2) : "0.00";

          return {
            label: `${from}/${to}`,
            rate: rate < 1 ? rate.toFixed(4) : rate.toFixed(2),
            change,
            pct,
            symbol: CURRENCY_SYMBOLS[to] || "",
          };
        });

        // Mutate ref directly — no re-render, no dependency change
        items.forEach((item, i) => {
          prevRatesRef.current[`${PAIRS[i].from}_${PAIRS[i].to}`] = parseFloat(item.rate);
        });

        setTickers(items);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (err) {
        console.error("Ticker fetch failed:", err);
      }
    };
    // here we set time as after every 60 seconds the ticker will update and show the latest exchange rates
    // So there no data will be as per second request infinite times to the API but it will be as per minute and it will update the ticker with latest exchange rates
    loadTicker();
    const interval = setInterval(loadTicker, 60000);
    return () => clearInterval(interval);
  }, []); 

  if (tickers.length === 0) {
    return (
      <div className="ticker-bar">
        <div className="ticker-loading">Loading rates...</div>
      </div>
    );
  }

  const doubled = [...tickers, ...tickers];

  return (
    <div className="ticker-bar">
      <div className="ticker-label">LIVE</div>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-pair">{item.label}</span>
              <span className="ticker-rate">
                {item.symbol}{item.rate}
              </span>
              <span className={`ticker-change ${item.change >= 0 ? "up" : "down"}`}>
                {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.pct)}%
              </span>
              <span className="ticker-sep">|</span>
            </span>
          ))}
        </div>
      </div>
      {lastUpdated && (
        <div className="ticker-time">Updated {lastUpdated}</div>
      )}
    </div>
  );
}