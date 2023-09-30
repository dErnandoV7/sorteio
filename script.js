const texto = "1.Marcos$2.Joana$3.Pedro$4."

let nomes = texto.split("$")
let numeros = []

for (let i = 0; i < nomes.length; i++) {
  numeros[i] = nomes[i].split(".")
}

let numberRandom
let rifaTrue

function sortear() {
  rifaTrue = false
  numberRandom = Math.floor(Math.random() * (4 - 1 + 1)) + 1
  console.log(numberRandom)

  for (let i = 0; i < nomes.length; i++) {
    if (numeros[i][0] == numberRandom) {
      if (numeros[i][1] == '' || numeros[i][1] == ' ') {
        document.querySelector('.pessoa-sorteada').innerText = `Número sorteado: ${numeros[i][0]}.\nRifa ${numeros[i][0]} não foi vendida.`
        console.log(`Número sorteado: ${numeros[i][0]}.\nRifa ${numeros[i][0]} não foi vendida.`)
        rifaTrue = true
        break
      } else {
        console.log(`Sorteado: ${numeros[i][0]}. ${numeros[i][1]}`)
        document.querySelector('.pessoa-sorteada').innerText = `Sorteado: ${numeros[i][0]}. ${numeros[i][1]}`
        rifaTrue = true
        break
      }
    }
  }

  if (!rifaTrue) {
    document.querySelector('.pessoa-sorteada').innerText = `Rifa de número ${numberRandom} não foi cadastrada.`
  }
}