const array = [1,2,3,5,56,23,3,32,101]

// 4.1 Escreva o código para a função soma, vista anteriormente.
function sum_arry(arr, i = 0) {
  if (i >= arr.length) {
    return 0
  }

  return arr[i] + sum_arry(arr, i + 1)
}

console.log(sum_arry(array))

// 4.2 Escreva uma função recursiva que conte o número de itens em uma lista.
function count_array_length(arr, i = 0) {
  if (i >= arr.length) {
    return 0
  }

  return 1 + count_array_length(arr, i + 1)
}

console.log(count_array_length(array))

// 4.3 Encontre o valor mais alto em uma lista.
function find_h(arr, i = 0, maior = -1) {
  if (i >= arr.length) {
    return maior
  }

  if (arr[i] > maior) {
    maior = arr[i]
  }

  return find_h(arr, i + 1, maior)
}

console.log(find_h(array))

console.log('-----------------------')

// 4.4 pesquisa binária recursiva
function pesquisa_binaria(arr, target, min, max) {
  if (min > max) {
    return -1
  }
  
  mid = Math.floor((min + max) / 2)
  guess = arr[mid]

  if (target === guess) {
    return mid
  }

  if (guess > target) {
    return pesquisa_binaria(arr, target, min, max - 1)
  }

  if (guess < target) {
    return pesquisa_binaria(arr, target, min + 1, max)
  }
}

console.log(pesquisa_binaria(array.sort((a, b) => a - b), 101, 0, array.length - 1))