import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Strategies from './components/Strategies';
import Progress from './components/Progress';
import Bot from './components/Bot';
import MineDetail from './components/MineDetail';
import Login from './components/Login';
import EmissionGraph from './components/EmissionGraph';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/mine/:id" element={<MineDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/emission-graph" element={<EmissionGraph emissionsData={[]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
