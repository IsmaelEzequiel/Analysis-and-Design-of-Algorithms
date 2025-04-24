// const generateRandomArray = require('./generate-random-array.js')

module.exports = function insertationSort (array, arraySize) {
  if (arraySize <= 0) return

  let x, j

  insertationSort(array, arraySize - 1)
  x = array[arraySize]
  j = arraySize - 1

  while (j >= 0 && array[j] > x) {
    array[j+1] = array[j]
    j -= 1
  }

  array[j+1] = x

  return array
}
