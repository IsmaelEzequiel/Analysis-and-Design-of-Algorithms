const maxValue = (array, inicio, fim) => {
  if (inicio === fim) {
    return array[inicio]
  }

  let meio = Math.floor((inicio + (fim - inicio)) / 2)

  let a = maxValue(array, inicio, meio)
  let b = maxValue(array, meio + 1, fim)

  if (a < b) {
    return b
  } else {
    return a
  }
}

const array = [1,4,6,89,5,3,4,6,8,9,5,34,34,5,3]

console.log(maxValue(array, 0, array.length - 1))
