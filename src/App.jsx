import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
  <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat p-4"
    style={{
      backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600')`,
    }}>
    
    <div className="absolute inset-0 bg-black/30 opacity-75"></div>

    <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="mb-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            onAmountChange={(amt) => setAmount(amt)}
          />
        </div>

        <div className="relative w-full my-4 flex items-center justify-center">
          <div className="h-px bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2 z-0" />
          
          <button
            type="button"
            onClick={swap}
            className="z-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
            title="Swap currencies">
            Swap
          </button>
        </div>

        <div className="mb-6">
          <InputBox
            label="To"
            amount={convertedAmt}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Convert {from} → {to}
        </button>
      </form>
    </div>
  </div>
);

}

export default App