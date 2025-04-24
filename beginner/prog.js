const prog = (value) => {
  if (value === 1) {
    console.log('Ué =s')
    return
  } else {
     for(let i = 1; i <= value; i++) {
      console.log('Uéeee')
    }

    console.log('end for')

    prog(value - 1)
  }
 }

console.log(prog(4))
