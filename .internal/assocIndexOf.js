import eq from '../eq.js'

/**
 * 获取 key 在 key-value 数组中的索引
 * @param {*} array  
 * @param {*} key 寻找的 key 值
 * @returns {number} 
 */

function assocIndexOf(array, key) {
  let { length } = array
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

// [['test1':1], ['test2': 2], ['test3': 3]]


export default assocIndexOf