import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  CurrencyDisabled = false,
  className = "",
}) {
  const amtInput = useId();

  return (
    <div className={`bg-white/30 backdrop-blur-md p-4 rounded-lg text-base flex ${className} gap-4`}>
      <div className="w-1/2">
        <label className="text-black/60 mb-1 block" htmlFor={amtInput}>
          {label}
        </label>
        <input
          id={amtInput}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-md bg-white text-black outline-none focus:ring-2 ring-blue-500 disabled:opacity-70"
        />
      </div>

      <div className="w-1/2 text-right">
        <p className="text-black/60 mb-1">Currency</p>
        <select
          className="w-full px-2 py-2 rounded-md bg-white text-black outline-none cursor-pointer disabled:opacity-60"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={CurrencyDisabled}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;