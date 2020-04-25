import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Add from '../Add/Add';
import Update from '../Update/Update';
import './App.css';

export default class App extends Component {
  static defaultProps = {
    data: {
      pets: [],
      types: []
    }
  };


  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.data.pets,
      types: this.props.data.types
    }
  };

  handleUpdate = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }

  handleAddPet = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }

  componentDidMount() {
      Promise.all([
          fetch(`${'/..dummy-store'}/pets`, {
            method: 'GET'
          }),
          fetch(`${'/..dummy-store'}/types`, {
            method: 'GET'
        })
          //need to submit the name of the new folder/new note
      ])
          .then(([petsRes, typesRes]) => {
              if (!petsRes.ok)
                  return petsRes.json().then(e => Promise.reject(e));
              if (!typesRes.ok)
                  return typesRes.json().then(e => Promise.reject(e));

              return Promise.all([petsRes.json(), typesRes.json()]);
          })
          .then(([pets, types]) => {
              this.setState({pets, types});
          })
          .catch(error => {
              console.error({error});
          });
  }
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
          <Route path='/add' componenet={Add} />
          <Route path='/update' component={Update} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
};
