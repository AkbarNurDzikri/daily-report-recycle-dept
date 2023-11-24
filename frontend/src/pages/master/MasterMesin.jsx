import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TableMasterMesin from '../../components/master/mesin/TableMasterMesin.jsx';
import NavbarComponent from '../../components/layouts/NavbarComponent.jsx';
import JudulHalaman from '../../components/layouts/JudulHalaman.jsx';
import TombolBuatMasterMesin from '../../components/master/mesin/TombolBuatMasterMesin.jsx';
import ModalForm from  '../../components/master/mesin/ModalForm.jsx';
import servisCreateMesin from  '../../services/master/mesin/servisCreateMesin.js';
import getAllMesin from '../../services/master/mesin/servisGetAllMesin.js';

const MasterMesin = () => {
  const [showModal, setShowModal] = useState(false);
  const [namaMesin, setNamaMesin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [machines, setMachines] = useState(null);
  const [textButton, setTextButton] = useState('');

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
        <JudulHalaman judulHalaman='Master Mesin' />
        
        <div className="d-flex justify-content-end">
          <TombolBuatMasterMesin handleShow={handleShow} setTextButton={setTextButton} />
        </div>

        <div className='mt-3'>
          <TableMasterMesin  
            machines={machines}
            handleShow={handleShow}
            showModal={showModal}
            handleClose={handleClose}
            namaMesin={namaMesin}
            setNamaMesin={setNamaMesin}
            formHandler={formHandler}
            isLoading={isLoading}
            setTextButton={setTextButton}
        />
        </div>
      </Container>

      <ModalForm
        showModal={showModal}
        handleClose={handleClose}
        namaMesin={namaMesin}
        setNamaMesin={setNamaMesin}
        formHandler={formHandler}
        isLoading={isLoading}
        textButton={textButton}
      />
    </>
  )
}

export default MasterMesin;