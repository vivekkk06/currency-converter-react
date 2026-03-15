# 💱 Currency Converter

A modern and responsive **Currency Converter Web Application** built using **React.js**.
The application allows users to convert currencies using **live exchange rates fetched from an external API**.

The project also includes a **live scrolling currency ticker, searchable currency dropdown, and interactive UI** designed for a smooth user experience.

---

# 🌐 Live Demo

🚀 Open the deployed website:

https://currency-converter-react-blue.vercel.app/

---

# 🚀 Features

### 🌍 Currency Selection

Users can select both **source currency** and **target currency** from dropdown menus.

### 🔄 Bidirectional Conversion

Users can enter the amount in **either input field**.
Updating one field automatically updates the other.

### 💹 Live Exchange Rate Display

The application displays the **current exchange rate** between selected currencies.

Example:

```
1 USD = 83.20 INR
```

### ⚡ Dynamic Data Fetching

Currency names and exchange rates are **fetched dynamically from an API**.

### 🔁 Swap Currencies

Users can easily **swap the source and destination currencies**.

### 📊 Live Currency Ticker

A scrolling ticker shows **real-time currency pair exchange rates** with percentage change indicators.

### 🔎 Searchable Currency Dropdown

Users can easily **search currencies** within the dropdown.

### 🏳️ Currency Flags

Currencies include **flag icons** for better visual clarity.

### 📱 Responsive Design

The application works smoothly across **desktop, tablet, and mobile devices**.

---

# 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **HTML5**
* **CSS3**
* **Exchange Rate API**

---

# 📡 API Used

Exchange rate data is fetched from:

```
https://api.exchangerate-api.com/v4/latest/USD
```

This API provides **real-time exchange rates for multiple currencies**.

---

# 📂 Project Structure

```
currency-converter-react
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Converter.js
│   │   ├── CurrencyInput.js
│   │   └── TickerBar.js
│   │
│   ├── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   ├── index.js
│   └── currency_hero_banner.svg
│
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```
git clone https://github.com/vivekkk06/currency-converter-react.git
```

### 2️⃣ Navigate to the project folder

```
cd currency-converter-react
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the development server

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# 🧠 How the Conversion Works

Currency conversion uses the formula:

```
Converted Amount = (Amount / Rate_from) × Rate_to
```

Where:

* **Rate_from** = exchange rate of the source currency
* **Rate_to** = exchange rate of the target currency

---

# 🎨 UI Features

* Glassmorphism card layout
* Hero banner background
* Animated swap button
* Live scrolling ticker
* Smooth hover animations
* Clean typography and spacing

---

# 📌 Future Improvements

Possible enhancements include:

* 🌙 Dark / Light mode toggle
* 📈 Historical exchange rate charts
* 🔔 Currency alerts
* 📊 Mini trend graphs
* 🌐 Multi-language support

---

# 👨‍💻 Author

**Vivek Badgujar**

GitHub:
https://github.com/vivekkk06

---

# 📄 License

This project is created for **educational purposes**.
