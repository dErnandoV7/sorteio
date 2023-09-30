let arrayParticipantes = []

function add() {

  let newParticipante = document.querySelector('#participante')
  if (!newParticipante.value == '') {
    let boxPartipantes = document.querySelector('.participantes').innerHTML
    document.querySelector('.participantes').innerHTML = boxPartipantes + `<span>${newParticipante.value}</span>`
    arrayParticipantes.push(newParticipante.value)
  } else {
    let popUp = document.querySelector('.no-character')
    popUp.classList.add('popup-animation')
  }
  document.querySelector('#participante').value = ''
}

let numberRandom

function sortear() {
  numberRandom = Math.floor(Math.random() * ((arrayParticipantes.length - 1) - 0 + 1)) + 0
  if (arrayParticipantes.length == 0) {
    let popUp = document.querySelector('.no-participants')
    popUp.classList.add('popup-animation')
  }

  for (let i = 0; i < arrayParticipantes.length; i++) {
    if (i == (numberRandom)) {
      document.querySelector('.vencedor').innerHTML = `<img src="Images/x.svg" onclick="closeDialog()"><p>${arrayParticipantes[i]} foi o vencedor!</p>`
      console.log(document.querySelector('.vencedor').innerHTML)
      document.querySelector('.vencedor').showModal()
      break
    }
  }
}

function closeNoCharacter() {
  document.querySelector('.no-character').classList.remove('popup-animation')
}

function closeNoParticipants() {
  document.querySelector('.no-participants').classList.remove('popup-animation')
}

function closeDialog() {
  document.querySelector('.vencedor').close()
}

function clean() {
  if (arrayParticipantes.length == 0) {
    let popUp = document.querySelector('.itIsClean')
  
    popUp.classList.add('popup-animation')
  } else {
    arrayParticipantes = ''
    document.querySelector('.participantes').innerHTML = ''
  }
}

function closeItIsClean() {
  document.querySelector('.itIsClean').classList.remove('popup-animation')
}