import React from 'react';

const PetContext = React.createContext({
  pets: [],
  addPet: () => {},
  updatePet: () => {},
});

export default PetContext;
