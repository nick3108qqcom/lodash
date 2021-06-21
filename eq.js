/**
 * use SameValueZero
 * @param {*} value 
 * @param {*} other 
 * 1. 相等比较规则
 * 2. 对NaN 做处理 可以由Object.is() 或者 Number.isNaN替代
 * 3. isNaN() 和 Number.isNaN() 不一样，isNaN 有一个怪异的行为，会对传入的值做类型转换
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

export default eq