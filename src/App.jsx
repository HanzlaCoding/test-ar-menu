import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ARViewer from './components/ARViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ar/:id" element={<ARViewer />} />
      </Routes>
    </Router>
  );
}

export default App;