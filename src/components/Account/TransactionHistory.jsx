import React, { useState, useEffect } from 'react';
import { getAccount } from '../../services/accountService';

const TransactionHistory = ({ accountId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getAccount(accountId);
        setTransactions(data.transactions);
      } catch (error) {
        console.error('Error fetching transaction history', error);
      }
    };
    fetchTransactions();
  }, [accountId]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
