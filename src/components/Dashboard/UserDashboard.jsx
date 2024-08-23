import React from 'react';
import TransferFunds from '../Account/TransferFunds';
import TransactionHistory from '../Account/TransactionHistory';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <TransferFunds />
      <TransactionHistory />
    </div>
  );
};

export default UserDashboard;
