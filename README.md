# XChange – Currency Converter

A modern, responsive **currency converter web app** built with **React**, **Vite**, and **Tailwind CSS**.  
XChange allows users to quickly convert between different world currencies in real-time using live exchange rates.

---

> 🔗 **Live Demo:** [[XChange.vercel.app](https://xchange-virid.vercel.app/)]  

---

## Features

✅ Real-time currency conversion using the **Open Exchange Rate API**  
✅ Simple, elegant **glassmorphic UI** powered by Tailwind CSS  
✅ Swap button to instantly switch “From” and “To” currencies  
✅ Fast performance using **Vite** and **React Hooks**  
✅ Fully responsive design - works great on mobile and desktop  
✅ Modular, reusable components

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
|  **React.js** | Frontend framework |
|  **Vite** | Fast bundler & dev server |
|  **Tailwind CSS** | Styling & layout |
|  **Open ER API** | Live exchange rate data |
|  **Vercel** | Deployment |

---

## Folder Structure

```bash
Currency-Converter/
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   ├── hooks/
│   │   └── useCurrencyInfo.js  
│   ├── App.jsx               
│   └── main.jsx              
├── public/
│   └── ...                  
├── index.html                   
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Krish2673/Currency-Converter.git
cd Currency-Converter
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
``` bash
npm run dev
```

Your app will now be running at:
http://localhost:5173/

---

## Usage Guide

1. Select the **“From”** currency and enter an amount.  
2. Choose the **“To”** currency to convert into.  
3. Click the **Convert** button to see the converted value.  
4. Use the **Swap** button to flip currencies instantly.

---

## Code Overview

### `useCurrencyInfo.js`

A custom React Hook that fetches real-time exchange rates based on the selected base currency.  
It uses the Fetch API inside a React `useEffect` hook and returns an object containing all available conversion rates.

### `InputBox.jsx`

- A reusable form component for currency and amount input  
- Accepts props for label, amount, selected currency, and event handlers  
- Supports disabling input fields (for the converted amount)  
- Renders a styled input and dropdown list of currency options using Tailwind CSS

### `App.jsx`

- Manages state values: `amount`, `from`, `to`, and `convertedAmt`  
- Handles currency swapping and conversion logic  
- Uses the `useCurrencyInfo` hook to get live rates  
- Renders two `InputBox` components for input and output  
- Implements a glassmorphic UI with Tailwind CSS

---

## API Reference

> API Used - https://open.er-api.com/v6/latest/{BASE_CURRENCY}
