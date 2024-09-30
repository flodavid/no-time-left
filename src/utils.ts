
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
  
export function reverseString(str: string) {
  return str.split("").reverse().join("")
}
  
/**
 * Adds a query string parameter in the provided url.
 * Concatenate words if it already exists.
 * Does nothing if value is null or undefined.
 *
 * @param {string} url to modify
 * @param {string} value of query parameter
 *
 * @returns {string} modified url.
 */
export function addToWordsQueryStringParameter (word: string) {
  const url = new URL(window.location.href)
  if (word === null || word === undefined) {
    return url
  }

  word = reverseString(word)
  word = encodeURIComponent(word)

  const currentWords = url.searchParams.get('words')
  if (currentWords !== null) {
    url.searchParams.set('words', currentWords + '_' + word)
    history.pushState({}, '', url)
  } else {
    url.searchParams.set('words', word)
    history.pushState({}, '', url)
  }
}
