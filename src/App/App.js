import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PetContext from '../PetContext';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Add from '../Add/Add';
import Update from '../Update/Update';
import Delete from '../Delete/Delete';
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

  handleDelete = deletePet => {
    const deletePets = this.state.pets.map((pet) => {
      if (pet.id === deletePet.id) {
        for (let key in pet ){
          pet[key] = deletePet[key];
        }
      }
      return ''; //not sure about this
    });
    this.setState({
      pets: deletePets
    })
  }

  handleUpdatePet = updatedPet => {
    //update state of the app
    const updatedPets = this.state.pets.map((pet) => {
      if (pet.id === updatedPet.id) {
        for (let key in pet ){
          pet[key] = updatedPet[key];
        }
      }
      return pet;
    });
    this.setState({
      pets: updatedPets
    })
  }


  handleAddPet = pet => {
    this.setState({
      pets: this.state.pets.concat(pet)
    })
  }

  handleSetPets = pet => {
    this.setState({
      filteredPets: this.state.pets.concat(pet)
    })
  }
  // The render method inside App is using the render prop on each Route so that props can be specified on the component instances.
  render () {
    const contextValue = {
      pets: this.state.pets,
      types: this.state.types,
      addPet: this.handleAddPet,
      updatePet: this.handleUpdatePet,
      setPets: this.handleSetPets
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
            <Route path='/update/:id' component={Update} />
            <Route path='/delete/:id' component={Delete} />
          </main>
        </PetContext.Provider>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
};
