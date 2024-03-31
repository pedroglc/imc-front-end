import api from '../api';
import ClasseImc from './classeImc';

async function cadastrarIMC(nome, peso, altura) {
  const imc = peso / (altura * altura);
  const classificacao = ClasseImc(imc);

  const data = {
    nome: nome,
    peso: peso,
    altura: altura,
    imc: imc.toFixed(2),
    classificacao: classificacao,
  };

  try {
    const response = await api.post('/imc', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default cadastrarIMC;
