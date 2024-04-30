import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './userContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <div>
      <HashRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User></User>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </HashRouter>
    </div>
  );
};

export default App;
