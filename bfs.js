function pessoa_vende (pessoa) {
  if (pessoa === 'voce') return true
}

const grafo = {}

grafo["voce"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy", "voce"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []

let line_search = [...grafo.voce] // 1. cria uma lista com  os primeiros vizinhos

let verifieds = new Set()

while (line_search.length) {
  person = line_search.shift() // 2. retira a prieira pessoa da fila

  if (!verifieds.has(person)) {
    if (pessoa_vende(person)) { // 3. verifica se é o que busca
      console.log('encontrou')
      return true
    } else {
      line_search.push(...grafo[person]) // 4. adicionar os vizinhos do item removido da fila anteriormente
      verifieds.add(person)
    }
  }
}

return false