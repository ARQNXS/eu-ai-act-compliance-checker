import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questionnaire from './components/Questionnaire';
import Result from './components/Result';
import './styles/App.css';

const App = () => {
  return (
    <Router basename="/eu-ai-act-compliance-checker">
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Questionnaire />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
