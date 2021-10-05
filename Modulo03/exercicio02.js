//IMC node js

let peso = 50
let altura = 1.75
let imc = 0.00

imc = parseFloat(peso / altura ** 2)

  if (imc < 18.50) {
    console.log("Usuário esta abaixo do peso: " + imc.toFixed(2))
  } else if (imc >= 18.50 &&  imc <= 25.00 ){
      console.log("Usuário esta no peso normal: " + imc.toFixed(2))
  } else if (imc >= 25.00 && imc <= 30.00) {
      console.log("Usuário esta acima do peso: " + imc.toFixed(2))
  } else if (imc > 30.00) {
      console.log("Usuário esta obeso: " + imc.toFixed(2))
  }