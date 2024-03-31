import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import EditModal from './EditModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import api from './api';
import handleDelete from './functions/imcDelete';

function Tabela(props) {
  const [imc_details, setImc_details] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    async function loadImcs() {
      const response = await api.get('/imc');
      setImc_details(response.data);
    }
    loadImcs();
  }, []);

  const handleClose = () => {
    setShow(false);
    setSelectedRow(null);
  };

  const handleShow = (row) => {
    setShow(true);
    setSelectedRow(row);
  };

  const handleDeleteLocal = (_id) => {
    handleDelete(_id);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {imc_details.map((row) => (
            <tr key={row.id}>
              <td>{row.nome}</td>
              <td>{row.peso}</td>
              <td>{row.altura}</td>
              <td>{row.imc}</td>
              <td>{row.classificacao}</td>
              <td id='editTrash'>
                <Button
                  variant='primary'
                  id='btn_edit'
                  onClick={() => handleShow(row)}
                >
                  Editar
                  <FontAwesomeIcon icon={faEdit} id='iconEdit' />
                </Button>
                <Button
                  variant='danger'
                  id='btn_delete'
                  onClick={() => handleDeleteLocal(row._id)}
                >
                  Excluir
                  <FontAwesomeIcon icon={faTrash} id='iconTrash' />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <EditModal
        show={show}
        handleClose={handleClose}
        _id={selectedRow ? selectedRow._id : ''}
        nome={selectedRow ? selectedRow.nome : ''}
        peso={selectedRow ? selectedRow.peso : ''}
        altura={selectedRow ? selectedRow.altura : ''}
      />
    </Container>
  );
}

export default Tabela;
