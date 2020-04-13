import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Search from './Search/Search';
import Add from './Add/Add';
import Update from './Update/Update';
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FindAPet</h1>
          <h3>The app that makes managing your animal shelter easier!</h3>
        </header>
        <nav>
          <Nav />
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/add' component={Add} />
          <Route path='/update' component={Update} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
};
