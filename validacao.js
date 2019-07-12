

function transmit(){

  const nome = document.getElementById('nome')
  const confPass = document.getElementById('confSenha')
  const senha = document.getElementById('senha')
  const checkNome = /^[a-zA-Z0-9]+$/.test(nome.value)

  if (!checkNome){
    alert('Nome Incorreto!')
    nome.classList.add('error')
    return false

  } else {
    nome.classList.remove('error')
  }

  if (confPass.value !== senha.value){
    confPass.classList.add('error')
    return false

  } else {
    confPass.classList.remove('error')
  }

}

function check(event){

  const password = event.target.value;
  const uppercase = /[A-Z]/.test(password)
  const numero = /[0-9]/.test(password)
  const texts = document.querySelectorAll('.form-steps__text')
  const steps = document.querySelector('.form-steps')
  const textCha = document.querySelector('.form-steps__text--cha')
  const textUpp = document.querySelector('.form-steps__text--upp')
  const textNum = document.querySelector('.form-steps__text--num')

  let step = 0;

  if (!password.length){
    texts.forEach((e) => {
      e.classList.remove('sucess')
      e.classList.remove('error')
    })
  }

  if (password.length >= 8){
    step++
    textCha.classList.add('sucess')
    textCha.classList.remove('error')
    
  } else {
    textCha.classList.add('error')
    textCha.classList.remove('sucess')
  }

  if (uppercase){
    step++
    textUpp.classList.add('sucess')
    textUpp.classList.remove('error')

  } else {
    textUpp.classList.add('error')
    textUpp.classList.remove('sucess')
  }

  if (numero){
    step++
    textNum.classList.add('sucess')
    textNum.classList.remove('error')

  } else {
    textNum.classList.add('error')
    textNum.classList.remove('sucess')

  }

  steps.setAttribute(['data-steps'],step)
  event.target.setAttribute(['data-trail'],step)

}


document.getElementById('senha').addEventListener('keyup', check)
document.querySelector('.form').onsubmit = transmit