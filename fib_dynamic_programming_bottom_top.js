const value = parseInt(process.argv[2])

const fib_dp = (value) => {
  const memo = []

  memo[0] = 0
  memo[1] = 1

  for (let i = 2; i <= value; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
    console.log(memo[i])
  }

  return memo[value]
}

console.log(fib_dp(value))
