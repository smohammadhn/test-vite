import { lcs } from './lcs'

export function formalAnalyzer(word, array) {
  let similarity = 0
  let finalResult = ''

  array.every((formalWord) => {
    let lcsString = lcs(formalWord, word)
    // console.log(lcsString)
    // if (lcsString === word) {
    //   similarity = 1
    //   let subtraction = lcsString.length - formalWord.length
    //   console.log(subtraction)
    //   finalResult = Math.abs(subtraction) - 1 <= 3 ? formalWord : word
    //   return false
    // }

    let tempSimilarity = lcsString.length / formalWord.length
    if (tempSimilarity > similarity) {
      similarity = tempSimilarity
      finalResult = formalWord
    }

    return true
  })

  return similarity >= 0.6 ? finalResult : word
}
