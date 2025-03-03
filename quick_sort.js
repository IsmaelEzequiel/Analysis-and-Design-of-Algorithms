function qsort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let meio = Math.floor(arr.length / 2)
  let pivo = arr[meio]

  let leftArr = arr.filter((item) => item < pivo)
  let rightArr = arr.filter((item) => item > pivo)

  let dupe = arr.filter((item) => item === pivo)

  return [...qsort(leftArr), ...dupe, ...qsort(rightArr)]
}

console.log(qsort([1,4,6,3,4,65,7,3,2,45,7,98,0,56,56,3]))
