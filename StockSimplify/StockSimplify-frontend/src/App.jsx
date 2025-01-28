/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddNewProductForm from './components/AddNewProductForm';
import Logout from './components/Logout';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
