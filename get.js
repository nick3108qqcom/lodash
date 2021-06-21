
function get(object, path) {
  path = castPath(path)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    object = object[path[index++]]
  }

  return (index && index === length) ? object : undefined
}


function castPath(path) {
  if (Array.isArray(path)) return path
  return path.replace(/\[/g, '.').replace(/\]/,'').split('.')
}

const obj = { 'a': [{ 'b': { 'c': 3 } }] }
console.log(get(obj, ['a', '0', 'b', 'c']))
console.log(get(obj, 'a[0].b.c'))
