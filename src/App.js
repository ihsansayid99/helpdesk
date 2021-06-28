import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage'
import About from './pages/about'
import SuccesStories from './pages/succesStories'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/success-stories" component={SuccesStories}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
