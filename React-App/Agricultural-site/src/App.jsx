// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './MainContent';
import Form from './Form';
import './App.css'
const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/predict" element={<Form />} />
        </Routes>
    </Router>
  );
};

export default App;
