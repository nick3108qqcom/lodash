/**
 * 
 * @param {Array} array 
 * @param {Function} predicate 
 * @param {Number} fromIndex 
 * @param {Boolean} fromRight 
 * @returns {number} 返回匹配到的下标，否则返回 -1
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}