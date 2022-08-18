function btnEncript() {
  const textEncript = encript(inputText.value)
  mensage.value = textEncript
  document.style.backgroundImage = 'none'
}

function encript(stringEncripted) {
  let matrizCode = [['e', 'enter',], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringEncripted = stringEncripted.toLowerCase()

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringEncripted.includes(matrizCode[i][0])) {
      stringEncripted = stringEncripted.replaceAll(matrizCode[i][0], matrizCode[i][1])
    }
  }
  return stringEncripted
}

function btnDescript() {
  const textDescript = descript(inputText.value)
  mensage.value = textDescript
  document.style.backgroundImage = 'none'
}

function descript(stringDescripted) {
  let matrizCode = [['e', 'enter',], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringDescripted = stringDescripted.toLowerCase()

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringDescripted.includes(matrizCode[i][1])) {
      stringDescripted = stringDescripted.replaceAll(matrizCode[i][1], matrizCode[i][0])
    }
  }
  return stringDescripted
}

const inputText = document.querySelector('.input-texto')
const mensage = document.querySelector('.mensagem')