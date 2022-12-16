import { formalAnalyzer } from './scripts/formalAnalyzer'

let formalWords = [
  'میتوانم',
  'است',
  'می‌باشد',
  'میرود',
  'برویم',
  'میتواند',
  'میخواهد',
]

let word = 'میشه'

console.log('result:>> ', formalAnalyzer(word, formalWords))
