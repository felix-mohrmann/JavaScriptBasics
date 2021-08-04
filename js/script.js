import { add, multiply, factorial } from './math'
import { students, renameMutable, renameImmutable } from './students'
import charactersResponse from './characters-response.json'
import { allNames, allNamesAndOrigin, fetchAllCharacters, livingHumans } from './rm_characters'

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


fetchAllCharacters.then(characters => {
  console.log('living Humans: ', livingHumans(characters))
  console.log('All Names: ', allNames(characters))
  console.log('All Names with Origin: ', allNamesAndOrigin(characters))
})