import { lcs } from './lcs'

export function formalAnalyzer(word, array) {
  let similarity = 0
  let finalResult = ''

  array.forEach((formalWord) => {
    let lcsString = lcs(formalWord, word)

    let tempSimilarity = lcsString.length / formalWord.length
    if (tempSimilarity >= similarity && formalWord.length > word.length) {
      similarity = tempSimilarity
      finalResult = formalWord
    }
  })

  return similarity >= 0.75 ? finalResult : word
}
