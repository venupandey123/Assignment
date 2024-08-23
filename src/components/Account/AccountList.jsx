import React, { useEffect, useState } from 'react';
import { listAccounts } from '../../services/accountService';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        // Fetch accounts from local storage using the service
        const { data } = await listAccounts();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts', error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            {account.name} - {account.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
