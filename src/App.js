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
  state = {
      animals: [],
      types: []
  };

  handleAddAnimal = animal => {
    this.setState({
      animals: this.state.animals.concat(animal)
    })
  };

  /*componentDidMount() {
      Promise.all([
          fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${config.API_KEY}`
            }
          }),
          fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${config.API_KEY}`
          }
        })
          //need to submit the name of the new folder/new note
      ])
          .then(([notesRes, foldersRes]) => {
              if (!notesRes.ok)
                  return notesRes.json().then(e => Promise.reject(e));
              if (!foldersRes.ok)
                  return foldersRes.json().then(e => Promise.reject(e));

              return Promise.all([notesRes.json(), foldersRes.json()]);
          })
          .then(([notes, folders]) => {
              this.setState({notes, folders});
          })
          .catch(error => {
              console.error({error});
          });
  }*/
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
