import React, { useEffect, useState } from 'react';
import { Modal, Container } from 'react-bootstrap';
import TableMasterMesin from '../../components/master/mesin/TableMasterMesin.jsx';
import NavbarComponent from '../../components/layouts/NavbarComponent.jsx';
import JudulHalaman from '../../components/layouts/JudulHalaman.jsx';
import TombolBuatMasterMesin from '../../components/master/mesin/TombolBuatMasterMesin.jsx';
import FormMasterMesin from '../../components/master/mesin/FormMasterMesin';
import servisCreateMesin from  '../../services/master/mesin/servisCreateMesin.js';
import getAllMesin from '../../services/master/mesin/servisGetAllMesin.js';

const MasterMesin = () => {
  const [showModal, setShowModal] = useState(false);
  const [namaMesin, setNamaMesin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [machines, setMachines] = useState(null);

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

        const updatedMachines = await getAllMesin();
        setMachines(updatedMachines);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllMesin();
      setMachines(result);
    }

    fetchData();
  }, [])

  return (
    <>
      <NavbarComponent />
      <Container style={{marginTop: '75px'}}>
        <div className='d-flex justify-content-between align-items-center' style={{borderBottom: '1px solid black'}}>
          <JudulHalaman judulHalaman='Master Mesin' />
          <TombolBuatMasterMesin handleShow={handleShow} />
        </div>
        <div className='mt-3'>
          <TableMasterMesin machines={machines} />
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