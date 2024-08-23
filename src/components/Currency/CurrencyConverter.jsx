import React, { useState } from 'react';
import { convertCurrency } from '../../services/currencyService';

const CurrencyConverter = () => {
  const [formData, setFormData] = useState({
    amount: '',
    fromCurrency: 'USD',
    toCurrency: 'EUR',
  });

  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const amount = await convertCurrency(formData.amount, formData.fromCurrency, formData.toCurrency);
      setConvertedAmount(amount);
    } catch (error) {
      console.error('Error converting currency', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
        <select name="fromCurrency" onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <select name="toCurrency" onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      {convertedAmount && <h3>Converted Amount: {convertedAmount}</h3>}
    </div>
  );
};

export default CurrencyConverter;
