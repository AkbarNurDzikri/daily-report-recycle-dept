import React, { useState } from 'react';
import { Modal, Container } from 'react-bootstrap';
import TableMasterMesin from '../../components/master/mesin/TableMasterMesin.jsx';
import NavbarComponent from '../../components/layouts/NavbarComponent.jsx';
import JudulHalaman from '../../components/layouts/JudulHalaman.jsx';
import TombolBuatMasterMesin from '../../components/master/mesin/TombolBuatMasterMesin.jsx';
import FormMasterMesin from '../../components/master/mesin/FormMasterMesin';
import servisCreateMesin from  '../../services/master/mesin/servisCreateMesin.js';

const MasterMesin = () => {
  const [showModal, setShowModal] = useState(false);
  const [namaMesin, setNamaMesin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const result = await servisCreateMesin(namaMesin);
      if(result === 'success') {
        setNamaMesin('');
        handleClose();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <NavbarComponent />
      <Container style={{marginTop: '75px'}}>
        <div className='d-flex justify-content-between align-items-center' style={{borderBottom: '1px solid black'}}>
          <JudulHalaman judulHalaman='Master Mesin' />
          <TombolBuatMasterMesin handleShow={handleShow} />
        </div>
        <div className='mt-3'>
          <TableMasterMesin />
        </div>
      </Container>

      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Mesin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormMasterMesin
            namaMesin={namaMesin}
            setNamaMesin={setNamaMesin}
            formHandler={formHandler}
            isLoading={isLoading}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MasterMesin;