const binarySearch = (array, target) => {
  let init = 0
  let last = array.length - 1

  while (init <= last) {
    let mid = Math.floor((init + last) / 2)
    let guess = array[mid]

    if (guess === target) return mid

    if (guess > target) {
      last = mid - 1
    } else {
      init = mid + 1
    }
  }

  return -1
}

console.log(binarySearch([1,3,4,5,6,7,8,9,10], 4))
