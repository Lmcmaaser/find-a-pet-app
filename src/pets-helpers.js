export const findPet = (pets=[], petid) =>
  pets.find(pet => pet.id === parseInt(petid))
  //id becomes an integer

// use?
// pass in sub-section of array instead of context
export const findAdopted = (pets=[], petadopted) =>
  pets.find(pet => pet.adopted === petadopted)

export const findPetType = (pets=[], pettype) =>
  pets.find(pet => pet.pet_type === pettype)

export const findSex = (pets=[], petsex) =>
  pets.find(pet => pet.sex === petsex)

export const findName = (pets=[], petname) =>
  pets.find(pet => pet.name === petname)

export const findAge = (pets=[], petage) =>
  pets.find(pet => pet.age === parseInt(petage))


/*export const getPetsInType = (pets=[], pet_type) => (
  // (!pet_type)
    // ? pets
    pets.filter(pet => pet.pet_type === pet_type)
)


export const getAdoptedPets = (pets=[], adopted) => (
  (!adopted)
    ? pets
    : pets.filter(pet => pet.adopted === adopted)
)

export const countPetsInType = (pets=[], typeid) =>
  pets.filter(pet => pet.typeid === typeid).length
*/
