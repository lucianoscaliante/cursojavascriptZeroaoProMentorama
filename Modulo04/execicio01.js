// Atividade 01
// Tabuada

let x = 5
let y = 10
let result = 0 

console.log("Tabuada do " + x)
console.log("----------------")
for (i=0; i <= y; i++){
  result = x * i
  console.log(x + " x " + i + " = " + result + " ")
  result = 0
}
console.log("----------------")


console.log("Tabuada do " + y)
console.log("----------------")
for (i=x; i <= x; i--){
  result = y * i
  console.log(y + " x " + i + " = " + result + " ")
  result = 0
  if (i === 1){
    break;
  } else{
    continue;
  }
}
console.log("----------------")