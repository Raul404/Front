import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateWrapper from './components/UpdateWrapper';
import DeleteWrapper from './components/DeleteWrapper';
import Create from './components/Create';
import List from './components/List';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/create" element={<Create  />}/>
        <Route path="/update/:userId" element={<UpdateWrapper />} />
        <Route path="/delete/:userId" element={<DeleteWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;