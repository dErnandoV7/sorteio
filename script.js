let arrayParticipantes = []

function add() {

  let newParticipante = document.querySelector('#participante')
  if (!newParticipante.value == '') {
    let boxPartipantes = document.querySelector('.participantes').innerHTML
    document.querySelector('.participantes').innerHTML = boxPartipantes + `<span>${newParticipante.value}</span>`
    arrayParticipantes.push(newParticipante.value)
  }
  document.querySelector('#participante').value = ''
}

let numberRandom

function sortear() {
  numberRandom = Math.floor(Math.random() * ((arrayParticipantes.length - 1) - 0 + 1)) + 0

  for (let i = 0; i < arrayParticipantes.length; i++) {
    if (i == (numberRandom)) {
      alert(`ganhador ${arrayParticipantes[i]}`)
      break
    }
  }
}
