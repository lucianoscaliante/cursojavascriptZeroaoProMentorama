// Atividade 02
// numeros impares e par, multiplos de 3 5 
// numeros primos 


let n = 10

console.log("Contagem de um numero")
console.log("-----------------")
for (i=0; i <= n; i++){
  console.log(i)
}
console.log("-----------------")
console.log("-----------------")

console.log("Quais numero são pares")
console.log("-----------------")
for (i=0; i <= n; i++){
  if (i % 2 === 0){
    console.log("O numero: " + i + " é par pois o resto da divisão e 0!!")
    console.log("-----------------")
  }else {
    console.log("O numero: " + i + " é impar pois sua divião sobra resto!!")
  }
}
console.log("-----------------")
console.log("-----------------")

console.log("Quais são múltiplos de 3 e 5")
console.log("-----------------")
for (i=0; i <= n; i++){
  if ((i % 3) === 0 || (i % 5) === 0){
    if ((i % 3) === 0 && (i % 5) === 0){
      console.log("O numero: " + i + " é múltiplos de 3 e 5 !!")
      console.log("-----------------")
    } else if (i % 3 === 0 && (i % 5) !== 0){
      console.log("O numero: " + i + " é múltiplos so de 3")
      console.log("-----------------")
    } else if (i % 5 === 0 && (i % 3) !== 0){
      console.log("O numero: " + i + " é múltiplos so de 3")
      console.log("-----------------")
    }
  }else {
    console.log("O numero: " + i + " não e múltiplos nem de 3 e nem de 5 !!")
    console.log("-----------------")
  }
}
console.log("-----------------")
console.log("-----------------")

console.log("Quais são primos")
console.log("-----------------")
for (i=2; i < n; i++){
  if (n % i === 0){
    console.log("O numero: " + i + " é primo!!")
    console.log("-----------------")
  } else {
    console.log("O numero: " + i + " não e primo !!!")
    console.log("-----------------")
  }
}
console.log("-----------------")