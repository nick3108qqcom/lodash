
function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array()

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

var arr = [1, 2, 3]
arr.forEach(v => {
  console.log(v)
  if (v == 2) {
    throw new Error(11)
  }
})
console.log(map(arr, (v) => v * v))


