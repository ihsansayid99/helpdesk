import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage'
import Contact from './pages/contact'
import PrivacyPolicy from './pages/privacyPolicy'
import TOService from './pages/tos'
import NotFound from './pages/404'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
          <Route path="/term-of-services" component={TOService}/>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
