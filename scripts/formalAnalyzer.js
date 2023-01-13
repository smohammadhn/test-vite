import { lcs } from './lcs'

export function formalAnalyzer(word, array) {
  let similarity = 0
  let finalResult = ''

  array.every((formalWord) => {
    let lcsString = lcs(formalWord, word)

    console.log(`word: ${word}, formalWord: ${formalWord}, lcs: ${lcsString}`)

    let tempSimilarity = lcsString.length / formalWord.length
    if (tempSimilarity > similarity && formalWord.length > word.length) {
      similarity = tempSimilarity
      finalResult = formalWord
    }

    return true
  })

  return similarity >= 0.6 ? finalResult : word
}
