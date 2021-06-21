/**
 * @param {Array} array 
 * @param {Number} start 
 * @param {Number} end 
 */
function slice(array, start, end) {
  let length = array ? array.length : 0
  if (!length) {
    return []
  }
  start = start === undefined ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = start + length
  }

  if (end < 0) {
    end = end + length
  }

  length = start > end ? 0 : (end - start)
  let result = new Array(length)
  let index = -1
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice