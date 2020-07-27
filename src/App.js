import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Service from './components/Service';
import Portfolio from './components/Portfolio';



function App() {
  const [test, setTest] = useState(1);

  const chng = (n) => {
  setTest(n);
}  

  const exercise = (
    <div className="App exer">
      <Router>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contacts} />

        <Link to="/">
          <button onClick={()=> chng(1)} >View Assignment</button>
        </Link>
      </Router>
      
    </div>
  );

  const assignment = (
    <div className="App asgmt">
      <Router>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contacts} />
        <Route path="/services" exact component={Service} />
        <Route path="/portfolio" exact component={Portfolio} />
        
        <Link to="/">
        <button onClick={()=> chng(2)} >View Exercise</button>
        </Link>
      </Router>
       
    </div>
  );

  if(test === 1) {
    return assignment
  }else return exercise
}

export default App;
