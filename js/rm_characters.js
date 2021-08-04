import charactersResponse from './characters-response.json'

export const fetchAllCharacters =
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(page => page.results)

export const livingHumans = character => character.filter(character =>
  character.status === 'Alive' && character.species === 'Human')

export const allNames = character => character.map(character =>
  character.name)

export const allNamesAndOrigin = character => character.map(character => (
  {
    name: character.name,
    origin: character.origin.name,
  }
))