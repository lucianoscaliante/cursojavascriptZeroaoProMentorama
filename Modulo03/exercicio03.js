// Atividade 03 
// triângulo

let lado1 = 5
let lado2 = 10
let lado3 = 4


if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {

    if (lado1 === lado2 && lado2 === lado3) {
        console.log("E um triângulo equilátero")
    } else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
        console.log("E um triângulo isósceles")
    } else if (lado1 != lado2 && lado2 != lado3){
        console.log(" E um triângulo escaleno")
    }
    
} else {
      console.log("Isso não e um triângulo")
  }
