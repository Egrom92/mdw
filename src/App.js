import React from "react";
import './App.scss';

import {Faq, HomePage, History, Gift} from './pages';
import { DebugGrid } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <DebugGrid hide={true} />
      <Router>
        <Routes>
          <Route path="/" exact="true" element={<HomePage/>} />
          <Route path="/history" exact="true" element={<History/>} />
          <Route path="/faq" exact="true" element={<Faq/>} />
          <Route path="/gift" exact="true" element={<Gift/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
