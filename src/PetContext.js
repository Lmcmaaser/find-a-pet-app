import React from 'react';

const PetContext = React.createContext({
  pets: [],
  types: [],
  addPet: () => {},
  updatePet: () => {},
});

export default PetContext;
