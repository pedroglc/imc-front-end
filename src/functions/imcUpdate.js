import api from '../api';
import ClasseImc from './classeImc';

const handleUpdate = async (_idEdit, nomeEdit, pesoEdit, alturaEdit) => {
  const imc = pesoEdit / (alturaEdit * alturaEdit);
  const classificacao = ClasseImc(imc);
  const data = {
    nome: nomeEdit,
    peso: pesoEdit,
    altura: alturaEdit,
    imc: imc.toFixed(2),
    classificacao: classificacao,
    _id: _idEdit,
  };

  try {
    const response = await api.put('/imc', data);
    if (response.status === 200) {
      alert('Alterado com sucesso');
      window.location.reload();
    } else {
      alert('Erro ao cadastrar');
    }
  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar');
  }
};

export default handleUpdate;
