const generateRandomArray = require('./generate-random-array.js')

const getMaxValue = (array) => {
  let max = 0

  array.map((value, index) => {
    if (array[index] > value) {
      max = array[index]
    }
  })

  return max
}

console.log(
  getMaxValue(
    generateRandomArray()
  )
)
