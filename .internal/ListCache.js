import assocIndexOf from './assocIndexOf'
class ListCache {


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
    this.__data__ = []
    this.size = 0
  }

  /**
   * 
   * @param {String} key 
   * @returns {Boolean} 
   */
  delete(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    if (index < 0) return false

    const lastIndex = data.length - 1
    if (index == lastIndex) {
      data.pop()
    } else {
      data.splice(index, 1)
    }
    --this.size
    return true
  }

  /**
   * 
   * @param {String} key 
   * @returns {*} 
   */
  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    return index > -1 ? data[index][1] : undefined
  }

  has(key) {
    const index = assocIndexOf(this.__data__, key)
    return index > -1
  }

  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    if (index < 0) {
      ++this.size
      data.push([key, value])
    } else {
      data[index][1] = value
    }

    return this
  }
}


export default ListCache