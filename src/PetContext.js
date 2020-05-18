import React from 'react';

const PetContext = React.createContext({
  pets: [],
  types: [],
  setPets: () => {},
  addPet: () => {},
  updatePet: () => {},
  deletePet: () => {}
});

export default PetContext;
