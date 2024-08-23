import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AccountList from "./components/Account/AccountList"
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import { getCurrentUser, logoutUser } from './services/authService';
import "./global.css"

const App = () => {
  const [user, setUser] = useState(getCurrentUser());

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/account" element={<AccountList/>}></Route>
        <Route
          path="/dashboard"
          element={user?.isAdmin ? <AdminDashboard /> : <UserDashboard />}
        />
        <Route path="/" element={user ? <h1>Welcome to the Banking System <br/> You are sucessfully Logged In</h1> : <h1>You have logged Out <br/> Happy Banking !! (- _ -)</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
