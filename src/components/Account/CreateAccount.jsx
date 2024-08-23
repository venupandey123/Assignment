import React, { useState } from 'react';
import { createAccount } from '../../services/accountService';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accountNumber = 'ACC' + Math.floor(Math.random() * 1000000);
      const initialBalance = 10000;
      await createAccount({ ...formData, accountNumber, balance: initialBalance });
      alert('Account created successfully');
    } catch (error) {
      console.error('Error creating account', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccount;
