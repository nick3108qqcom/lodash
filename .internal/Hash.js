const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {

  /**
   * 
   * @param {Array} entries 
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  clear() {
    this.size = 0
    this.__data__ = Object.create(null)
  }


  delete(key) {
    const data = this.__data__

    const result = this.has(key) && delete data[key]
    this.size == result ? 1 : 0
    return result
  }

  has(key) {
    const data = this.__data__
    return data[key] !== undefined
  }

  get(key) {
    const data = this.__data__
    return data[key] === HASH_UNDEFINED ? undefined : data[key]

  }

  /**
   * 
   * @param {String} key 
   * @param {*} value 
   */
  set(key, value) {
    const data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = value === undefined ? HASH_UNDEFINED : value
    return this
  }

}

// export default Hash
const h1 = new Hash(
  [
    ['test1', 1], ['test2', '__lodash_hash_undefined__'], ['test3', undefined], ['test1', null]
  ]
)