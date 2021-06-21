/**
 * @desc 返回过滤掉假值得数组
 * @param {*} array 
 * 
 * [0, 1, false, 2, '', 3]
 * => [1,2,3]
 * 
 */
function compact(array) {
  const result = []
  let resIndex = 0

  if (array == null) return result

  for (let value of array) {
    if (value) result[resIndex++] = value
  }
  return result
}

/***
 * 循环为什么使用for...of
 * 1. for() 可以实现，没有for of简洁
 * 2. for in 以任意顺序遍历一个对象的可枚举类型， 
 *  Ⅰ. 顺序不能保证
 *  Ⅱ会遍历所有可枚举类型，包括继承属性
 * 3. for of 
 *  a. 在数组原型上有个很特别的属性，Symbol.iterator，for...of循环内部调用的就是 Symbol.iterator方法
 *  b. Symbol.iterator 在调用时会返回一个遍历器对象，这个遍历器对象中包含next方法，for...of在每次循环都会调用next方法获取值，直到next返回对象中的done为true为止
 */


Array.prototype[Symbol.iterator] = function () {
  let index = 0
  let _self = this
  return function next() {
    if (index < _self.length) {
      return {
        value: _self[index++] * 2,
        done: false,
      }
    } else {
      return {
        done: true,
      }
    }
  }
}

// 使用generator改造
Array.prototype[Symbol.iterator] = function* () {
  let index = 0
  while (index < this.length) {
    yield this[index++]*2
  }
}

console.log(compact([0, 1, false, 2, '', 3]))