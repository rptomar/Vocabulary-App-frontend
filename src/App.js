import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './appPages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/** Use routes for navigate the application and imaport homepage path */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
