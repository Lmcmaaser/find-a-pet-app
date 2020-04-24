export const findType = (types=[], typeid) =>
  types.find(type => type.id === typeid)

export const findPet = (pets=[], petid) =>
  pets.find(pet => pet.id === parseInt(petid))
  //id becomes an integer

export const findAdopted = (pets=[], petadopted) =>
  pets.find(pet => pet.adopted === petadopted)

export const getPetsInType = (pets=[], typeid) => (
  (!petid)
    ? pets
    : pets.filter(pet => pet.typeid === parseInt(typeid))
)

export const getAdoptedinPets = (pets=[], petadopted) => (
  (!petadopted)
    ? pets
    : pets.filter(pet => pet.petadopted === petadopted)
)

export const countPetsInType = (pets=[], typeid) =>
  pets.filter(pet => pet.typeid === typeid).length
