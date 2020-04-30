import React from 'react';

const PetContext = React.createContext({
  pets: [],
  types: [],
  setPets: () => {},
  addPet: () => {},
  updatePet: () => {},
});

export default PetContext;
