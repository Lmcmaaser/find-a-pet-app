export const findPet = (pets=[], petid) =>
  pets.filter(pet => pet.id === parseInt(petid))
  //id becomes an integer

// use?
// pass in sub-section of array instead of context

export const findAdopted = (pets=[], petadopted) =>
  pets.filter(pet => pet.adopted === petadopted)

export const findPetType = (pets=[], pettype) =>
  pets.filter(pet => pet.pet_type === pettype)

export const findSex = (pets=[], petsex) =>
  pets.filter(pet => pet.sex === petsex)

export const findName = (pets=[], petname) =>
  pets.filter(pet => pet.name === petname)

export const findAge = (pets=[], petage) =>
  pets.filter(pet => pet.age === parseInt(petage))


/*export const countPetsInType = (pets=[], typeid) =>
  pets.filter(pet => pet.typeid === typeid).length
*/
