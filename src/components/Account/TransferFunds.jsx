import React, { useState } from 'react';
import { transferFunds } from '../../services/accountService';

const TransferFunds = () => {
  const [formData, setFormData] = useState({
    recipientAccountNumber: '',
    amount: '',
    currency: 'USD',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await transferFunds(formData);
      alert('Funds transferred successfully');
    } catch (error) {
      console.error('Error transferring funds', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="recipientAccountNumber" placeholder="Recipient Account Number" onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
      <select name="currency" onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
      <button type="submit">Transfer Funds</button>
    </form>
  );
};

export default TransferFunds;
