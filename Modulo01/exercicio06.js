//------------
// Faça o cáculo de uma equação de 2 grau (bhaskara)

console.log("---------------------------------------------------------")
console.log("Vamos calcular as raizes de uma euqação de segundo grau")
console.log("---------------------------------------------------------")

let a = 1
let b = -5
let c = 6

const delta = b ** 2 - 4 * a * c
const raizdelta = delta ** 0.5

let x1 = (-b + raizdelta) / (2 * a)
let x2 = (-b - raizdelta) / (2 * a)

console.log("------------------------------------------")
console.log("------Resultado--Da--Equação--De--Segundo--Grau")
console.log("Delta da equação = " + delta)
console.log("A raiz do delta = " + raizdelta)
console.log("Resultado do X1 = " + x1)
console.log("Resultado do X2 = " + x2)
console.log("-------------------------------------------")