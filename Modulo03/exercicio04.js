// Atividade 04 
// Conversão de temperatura 

let pais = 'Brasil'
let temperatura = 40
let formatotemp = 'fahrenheit'
let conversao = 0 


switch (formatotemp) {
  case 'celsius' :
    conversao = (temperatura * 1.8) + 32
    console.log("-------------------")
    console.log("Nome do pais: " + pais)
    console.log("Temperatura: " + temperatura)
    console.log("Formato da temperatura: " + formatotemp)
    console.log("Conversão da temperatura para Farenheit: " + conversao)
    console.log("-------------------")
    break;

  case 'fahrenheit' :
    conversao = (temperatura * 1.8) - 32
    console.log("-------------------")
    console.log("Nome do pais: " + pais)
    console.log("Temperatura: " + temperatura)
    console.log("Formato da temperatura: " + formatotemp)
    console.log("Conversão da temperatura para Fahrenheit: " + conversao)
    console.log("-------------------")
    break;
}