const hanoi2 = (discos, inicio, aux, destino) => {
  if (discos === 1) {
    console.log(`Move disco ${discos} de ${inicio} para ${destino}`)
  } else {
    hanoi2(discos - 1, inicio, destino, aux)
    console.log(`Move disco ${discos} de ${inicio} para ${destino}`)
    hanoi2(discos - 1, aux, inicio, destino)
  }
}

console.log('----')
hanoi2(30, 'Origem', 'Auxiliar', 'Destino')
