const value = parseInt(process.argv[2], 10)

function getSumValue (value) {
  let newValue = 0

  if (value <= 0) return 'Value should greater then 0'

  let tmp = value + 1

  newValue = (value * tmp) / 2

  return newValue
}

console.log(getSumValue(value))
