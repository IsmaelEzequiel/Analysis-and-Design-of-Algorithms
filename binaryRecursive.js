const value = parseInt(process.argv[2], 10)

const binary = (vetor, inicio, fim, chave) => {
  let metadeDoVetor = Math.floor(inicio + fim / 2)

  if (vetor[metadeDoVetor] === chave) return console.log(`Encontrou ${chave}`)

  if (inicio >= fim) {
    return console.log('Não encontrou!')
  } else if (vetor[metadeDoVetor] < chave) {
    return binary(vetor, inicio + 1, fim, chave)
  } else {
    return binary(vetor, inicio, fim - 1, chave)
  }
}

const array = [1,2,3,4,5,6,7,8,9,10]

console.log(binary(array, 0, array.length, value))
