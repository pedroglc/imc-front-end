function ClasseImc(imc) {
  let classificacao;
  if (imc < 18.5) {
    classificacao = 'Baixo peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = 'Obesidade grau 1';
  } else if (imc >= 35 && imc <= 39.9) {
    classificacao = 'Obesidade grau 2';
  } else {
    classificacao = 'Obesidade extrema';
  }
  return classificacao;
}
export default ClasseImc;
