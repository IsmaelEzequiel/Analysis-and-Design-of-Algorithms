function soma(arr, i) {
  if (i >= arr.length) {
    return 0
  }

  return arr[i] + soma(arr, i+1)
}

let arr = [1,2,3,4,5,6,6,7]

console.log(soma(arr, 0))