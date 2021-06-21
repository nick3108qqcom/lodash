/**
 * 
 * @param {Array} array 
 * @param {*} value 
 * @param {number} fromIndex 
 */
function strictIndexOf(array, value, fromIndex) {
  const { length } = array
  let index = fromIndex - 1
  while (++index < length) {
    if (value === array[index]) {
      return index
    }
  }
  return -1
}