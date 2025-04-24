const value = parseInt(process.argv[2], 10)

const fib_dp = (value) => {
  const memo = []

  if (memo[value] === value) {
    return memo[value]
  } else {
    if (value <= 2) {
      f = 1
    } else {
      f = fib_dp(value - 1) + fib_dp(value - 2)
    }
  }

  memo[value] = f

  return f
}

console.log(fib_dp(value))
