/**
 * 
 * @param {*} array 
 * @param {*} size 
 * 
 * 
 * chunk([1,2,3,4], 2)
 * [[1,2],[3,4]]
 */
function chunk(array, size) {
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }

  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}


console.log(chunk([1, 2, 3, 4], 2))
