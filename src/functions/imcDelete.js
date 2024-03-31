import api from '../api';

const handleDelete = async (_id) => {
  if (window.confirm('Deseja realmente excluir?')) {
    var result = await api.delete('/imc/' + _id);
    if (result.status === 200) {
      window.location.reload();
    } else {
      alert('ocorreu um erro');
    }
  }
};

export default handleDelete;
