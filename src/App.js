import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Homepage}/>
    </Router>
  );
}

export default App;
