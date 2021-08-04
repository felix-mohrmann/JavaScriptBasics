import { add, multiply, factorial } from './math'
import { students, renameMutable, renameImmutable } from './students'
import charactersResponse from './characters-response.json'

/*
console.log('2 and 40 is', add(2, 40))
console.log('3 times 4 is', multiply(3, 4))
console.log('factorial of 3 is', factorial(3))

console.log('before mutation', JSON.parse(JSON.stringify(students)))
renameMutable(students, 'Paul', 'Päule')
console.log('after mutation', JSON.parse(JSON.stringify(students)))

console.log('before immutable', JSON.parse(JSON.stringify(students)))
const newStudents = renameImmutable(students, 'Lucy', 'Ludmilla')
console.log('after immutable', JSON.parse(JSON.stringify(students)))
console.log('copied students', newStudents)
*/

console.log("everything", charactersResponse)

const livingHumans = charactersResponse.results.filter(human => human.status === "Alive")
console.log("living Humans: ", livingHumans)

const allNames = charactersResponse.results.map(character => (
  character.name
))

/*
for (let i = 0; i < charactersResponse.results.length; i++) {
  allNames.push(charactersResponse.results[i].name)
}
*/

console.log("All Names: ", allNames)

const allNamesAndOrigin = charactersResponse.results.map(character  => (
  {
    name: character.name,
    origin: character.origin.name
  }
));

console.log("All Names with Origin: ", allNamesAndOrigin)