import { formalAnalyzer } from './scripts/formalAnalyzer'
import { asyncReadFile } from './scripts/playground'
import { sentenceSplitter } from './scripts/sentenceSplitter'

const formalWords = await asyncReadFile('./WordsData/words.txt')

const textarea = document.getElementById('input-text')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  const inputText = textarea.value
  let tokens = sentenceSplitter(inputText)

  tokens = tokens.map((token) => formalAnalyzer(token, formalWords))

  console.log('final result:>>', tokens.join(' '))
})
