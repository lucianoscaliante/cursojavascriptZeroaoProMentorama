// Atividade de parcelamento em compra

let valortotal = 400.00;
let parcelas = 0;
let resultadojuros = 0.00;
let valorparcelas = 0.00;


  if (parcelas >= 12 &&  parcelas <= 24) {
      resultadojuros = valortotal * 0.10
      valortotal += resultadojuros
      valorparcelas = valortotal / parcelas

      console.log("Valor total com juros: " + resultadojuros)
      console.log("Valor de cada parcela: " + valorparcelas)

  } else if (parcelas >= 24 &&  parcelas <= 36){
      resultadojuros = valortotal * 0.15
      valortotal += resultadojuros
      valorparcelas = valortotal / parcelas

      console.log("Valor total com juros: " + resultadojuros)
      console.log("Valor de cada parcela: " + valorparcelas)

  } else if (parcelas > 0  &&  parcelas < 12 ) {
      console.log("O mínimo de parcela tenque se 12 ou maior que 12 !!")

  } else {

    console.log("O valor avista da compra: " + valortotal)
  }