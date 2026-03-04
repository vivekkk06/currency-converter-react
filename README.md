# Currency Converter

A simple and responsive **Currency Converter Web Application** built using **React.js**.
The application allows users to convert an amount from one currency to another using **live exchange rate data fetched from an external API**.

---

# 🚀 Features

### 1️⃣ Currency Selection

Users can select both **source currency** and **target currency** from dropdown menus.

### 2️⃣ Bidirectional Conversion

Users can enter the amount in **either input field**.
Updating one value automatically updates the other.

### 3️⃣ Live Exchange Rate Display

The application displays the **current exchange rate** between the selected currencies.

Example:

```
1 USD = 83.20 INR
```

### 4️⃣ Dynamic Data Fetching

Currency names and exchange rates are **fetched dynamically from an API** instead of being hardcoded.

### 5️⃣ Swap Currencies

Users can easily **swap the source and destination currencies**.

### 6️⃣ Responsive UI

The interface works smoothly on **desktop and mobile screens**.

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

This API provides real-time exchange rates for multiple currencies.

---

# 📂 Project Structure

```
currency-converter-react
│
├── public
│
├── src
│   ├── components
│   │   ├── Converter.js
│   │   └── CurrencyInput.js
│   │
│   ├── api.js
│   ├── App.js
│   ├── App.css
│   └── index.css
│
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```
git clone https://github.com/vivekkk06/currency-converter-react.git
```

### 2️⃣ Navigate to the project directory

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

The application will start at:

```
http://localhost:3000
```

---

# 🧠 How the Conversion Works

The conversion is calculated using the formula:

```
Converted Amount = (Amount / Rate_from) × Rate_to
```

Where:

* **Rate_from** = exchange rate of source currency
* **Rate_to** = exchange rate of target currency

---

# 📱 UI Features

* Clean card-based layout
* Gradient background
* Responsive design
* Interactive input fields
* Smooth button hover effects

---

# 📌 Future Improvements

Possible enhancements:

* Currency **flag icons**
* **Searchable currency dropdown**
* **Dark mode**
* **Historical exchange rate charts**
* **Offline caching of exchange rates**

---

# 👨‍💻 Author

**Vivek Badgujar**

---
