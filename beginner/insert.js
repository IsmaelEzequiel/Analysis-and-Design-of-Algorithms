const generateRandomArray = require('./generate-random-array.js')

function insertationSort (array) {

  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j+1] = array[j]
      j -= 1
    }
  
    array[j+1] = temp
  }

  return array
}


console.log(
  insertationSort(generateRandomArray())
)
