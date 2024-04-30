import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './userContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/dogs">
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
            <Route path="foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
