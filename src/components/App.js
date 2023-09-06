import React from 'react';
import data from './data/data.json';
import Scp from './components/Scp';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav data={data} />
      <Routes>
        <Route path="/" element={<Default />} />
        {data.map((scp) => (
          <Route
            key={scp.model}
            path={`/${scp.model}`}
            element={<Scp scp={scp} />}
          />
        ))}
      </Routes>
    </Router>
  );
}



export default App;
