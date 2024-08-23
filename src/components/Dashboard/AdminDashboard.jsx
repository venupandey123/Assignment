import React from 'react';
import CreateAccount from '../Account/CreateAccount';
import AccountList from '../Account/AccountList';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CreateAccount />
      <AccountList />
    </div>
  );
};

export default AdminDashboard;
