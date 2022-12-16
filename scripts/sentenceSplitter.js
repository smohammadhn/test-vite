export function sentenceSplitter(inputText) {
  const SplitText = inputText.trim().split(' ')

  // check for exceptions eg. (می روم = میروم)
  for (let i = 0; i < SplitText.length; i++) {
    if (SplitText[i] === 'می') {
      SplitText[i] += SplitText[i + 1]
      SplitText.splice(i + 1, 1)
    } else if (SplitText[i] === 'ها') {
      SplitText[i - 1] += SplitText[i]
      SplitText.splice(i, 1)
    }
  }

  // returns an array of text tokens
  return SplitText
}
