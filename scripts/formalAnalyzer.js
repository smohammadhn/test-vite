import { lcs } from './lcs'

export function formalAnalyzer(word, array) {
  let similarity = 0
  let finalResult = ''

  array.every((formalWord) => {
    let lcsString = lcs(formalWord, word)

    if (lcsString === word) {
      similarity = 1
      var subtraction = word.length - formalWord.length // تفریق طول دو کلمه
      var rightWord = Math.abs(subtraction) // قدر مطلق گرفتن  از فاصله دو کلمه
      finalResult = rightWord < 3 ? formalWord : word
      return false
    }

    let tempSimilarity =
      lcsString.length / Math.min(word.length, formalWord.length)
    if (tempSimilarity > similarity) {
      similarity = tempSimilarity
      finalResult = formalWord
    }

    return true
  })

  return similarity > 0.65 ? finalResult : word
}
