import { formalAnalyzer } from './scripts/formalAnalyzer'
import { asyncReadFile } from './scripts/playground'

// let formalWords = [
//   'میتوانم',
//   'است',
//   'می‌باشد',
//   'میرود',
//   'برویم',
//   'میتواند',
//   'میخواهد',
// ]
const Words = asyncReadFile('./WordsData/words.txt')
var FormalWords
Words.then((result) => {
  FormalWords = result
})
console.log(FormalWords)
let word = 'میشه'

console.log('result:>> ', formalAnalyzer(word, formalWords))
