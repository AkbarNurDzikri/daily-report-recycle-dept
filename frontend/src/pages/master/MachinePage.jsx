import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/layouts/NavbarComponent';
import DataList from  '../../components/master/machines/DataList';
import React, { useEffect, useState } from 'react';
import getAllMesin from '../../services/master/machines/getAllMachines.js';

const MachinePage = () => {
  const [machines, setMachines] = useState(null);
  const [machineName, setMachineName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [buttonTextForm, setButtonTextForm] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await getAllMesin();
      setMachines(result);
    }

    getData();
  }, [])

  return (
    <>
      <NavbarComponent />
      <Container className='mx-auto' style={{marginTop: '75px'}}>
        <DataList
          machines={machines}
          setMachines={setMachines}
          machineName={machineName}
          setMachineName={setMachineName}
          showModal={showModal}
          setShowModal={setShowModal}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
          buttonTextForm={buttonTextForm}
          setButtonTextForm={setButtonTextForm}
        />
      </Container>
    </>
  )
}

export default MachinePage;