import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Tabela from './table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import cadastrarIMC from './functions/cadastro';

function Calculator() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [valorImc, setValorImc] = useState(0);

  async function handleCadastroLocal(e) {
    e.preventDefault();

    try {
      await cadastrarIMC(nome, peso, altura);
      alert('Cadastrado com sucesso');
      window.location.reload();
    } catch (error) {
      alert('Erro ao cadastrar');
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            placeholder='Digite o nome'
            id='nome'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Peso</Form.Label>
          <Form.Control
            type='Number'
            onChange={(e) => setPeso(e.target.value)}
            value={peso}
            placeholder='Digite o peso'
            id='peso'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Altura</Form.Label>
          <Form.Control
            type='Number'
            onChange={(e) => setAltura(e.target.value)}
            value={altura}
            placeholder='Digite a altura'
            id='altura'
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'
          size='lg'
          id='btn-calcular'
          onClick={handleCadastroLocal}
        >
          Calcular
          <FontAwesomeIcon icon={faCheck} id='iconCheckCalcular' />
        </Button>
      </Form>
      <Tabela
        resultadoImc={valorImc.toFixed(2)}
        onChange={(e) => setValorImc(e.target.value)}
      />
    </Container>
  );
}

export default Calculator;
