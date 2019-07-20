const generateRandomArray = require('./generate-random-array.js')
const insertationSort = require('./insertationSort.js')

const binarySearch = (array, key) => {
  let ini = 0
  let last = array.length - 1
  let mid = 0;

  while (ini < last) {
    mid = Math.ceil((ini+ last) / 2, 10)

    if (key === array[mid]) {
      return {
        key,
        position: array[mid]
      }
    }

    if (key < array[mid]) last += 1

    ini += 1
  }

  return -1
}

const array = generateRandomArray()

console.log('--------------------- FOUND ---------------------')

array.map((key, index) => {
  console.log({
    key,
    position: index
  })
})

console.log(binarySearch(array, 10))
