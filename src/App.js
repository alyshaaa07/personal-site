import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;