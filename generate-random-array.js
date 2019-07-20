module.exports = function () {
  let array = []

  for(i = 0; i < 30; i++) {
    array.push(Math.floor(Math.random() * 100))
  }

  return array
}

