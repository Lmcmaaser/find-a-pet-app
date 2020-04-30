import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PetContext from '../PetContext';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Add from '../Add/Add';
import Update from '../Update/Update';
import './App.css';

export default class App extends Component {
  // good, app gets data from it's props
  static defaultProps = {
    data: {
      pets: [],
      types: []
    }
  };

  // good, data is added to App's state in its constructor
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.data.pets,
      types: this.props.data.types
    }
  };

  handleUpdatePet = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }

  handleAddPet = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }

  handleSetPets = pet => {
    this.setState({
      filteredPets: this.state.newFilteredPets.concat(pet)
    })
  }
  // The render method inside App is using the render prop on each Route so that props can be specified on the component instances.
  render () {
    const contextValue = {
      pets: this.state.pets,
      types: this.state.types,
      addPet: this.handleAddPet,
      updatePet: this.updatePet,
      setPets: this.
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>FindAPet</h1>
          <h3>The app that makes managing your animal shelter easier!</h3>
        </header>
        <PetContext.Provider value={contextValue}>
          <nav>
            <Nav />
          </nav>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/add' component={Add} />
            <Route path='/update' component={Update} />
          </main>
        </PetContext.Provider>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
};
