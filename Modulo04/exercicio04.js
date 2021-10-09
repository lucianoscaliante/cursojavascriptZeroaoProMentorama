//Atividade 04
//Numeros inteiros

let inicial = 10
let final = 30

console.log("----------------")
console.log("Numeros inteiro entre os intervalos")
for(i=inicial; i <= final; i++){
  console.log(i)
}
    if (inicial === final){
        console.log("----------------")
        console.log("O intervalo que foi passado são iguais " + i)
    }else if (inicial < final){
        console.log("----------------")
        console.log("Ordem crescente")
        for(i=inicial; i <= final; i++){
        console.log(i)
        }
    }else if (inicial > final){
        console.log("----------------")
        console.log("Ordem decrescente")
        for (i=inicial; i >= final; i--){
            console.log(i)
        }
    }
console.log("----------------")