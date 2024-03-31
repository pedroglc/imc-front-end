import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import handleUpdate from './functions/imcUpdate';

function EditModal({ show, handleClose, _id, nome, peso, altura }) {
  const [nomeEdit, setNomeEditLocal] = useState('');
  const [pesoEdit, setPesoEditLocal] = useState(0);
  const [alturaEdit, setAlturaEditLocal] = useState(0);
  const [_idEdit, setIdEditLocal] = useState('');

  useEffect(() => {
    setNomeEditLocal(nome);
    setPesoEditLocal(peso);
    setAlturaEditLocal(altura);
    setIdEditLocal(_id);
  }, [nome, peso, altura, _id]);

  const handleUpdateLocal = () => {
    handleUpdate(_idEdit, nomeEdit, pesoEdit, alturaEdit); // Chame a função handleUpdate
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar dados do IMC</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setNomeEditLocal(e.target.value)}
              value={nomeEdit}
              placeholder='Digite o nome'
              id='nome'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => setPesoEditLocal(parseFloat(e.target.value))}
              value={pesoEdit}
              placeholder='Digite o peso'
              id='peso'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Altura</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => setAlturaEditLocal(parseFloat(e.target.value))}
              value={alturaEdit}
              placeholder='Digite a altura'
              id='altura'
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Fechar
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            handleUpdateLocal();
          }}
        >
          Atualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
