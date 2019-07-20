const expo = (a, b) => {
  if (b === 1) return a

  return a * expo(a, b - 1)
}

const expoChange = (a, b) => {
  if (b === 1) return a

  if (b % 2 === 0) return expoChange(a*a, b/2)

  return a*expoChange(a, b - 1)
}

console.log(expo(3, 4))
console.log(expoChange(3, 4))
