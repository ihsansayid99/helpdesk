import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage'
import About from './pages/about'
import SuccesStories from './pages/succesStories'
import Contact from './pages/contact'
import PrivacyPolicy from './pages/privacyPolicy'
import TOService from './pages/tos'
import Partners from './pages/partners'

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
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/privay-policy" component={PrivacyPolicy}/>
          <Route exact path="/term-of-services" component={TOService}/>
          <Route exact path="/partners" component={Partners}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
