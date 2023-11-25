import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import ModalForm from './ModalForm';
import getMachineById from '../../../services/master/machines/getMachineById';
import { useEffect, useState } from 'react';

const DataList = ({
  machines,
  setMachines,
  machineName,
  setMachineName,
  showModal,
  setShowModal,
  modalTitle,
  setModalTitle,
  buttonTextForm,
  setButtonTextForm
}) => {
  const handleCreate = () => {
    setModalTitle('Tambah Mesin');
    setButtonTextForm('Simpan');
    setShowModal(true);
    setMachineName('');
  }

  const handleCloseModal = () => setShowModal(false);
  const [machineId, setMachineId] = useState(null);
  
  const handleEdit = async (id) => {
    const machine = await getMachineById(id);
    setModalTitle('Edit Mesin');
    setButtonTextForm('Update');
    setShowModal(true);
    setMachineName(machine.nama_mesin);
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h4>Master Mesin</h4>
        <Button type='button' className='btn-sm' onClick={handleCreate}>Tambah</Button>
      </div>

      <Table striped bordered responsive className='text-center caption-top'>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Mesin</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {machines && machines.map((machine, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{machine.nama_mesin}</td>
              <td>
                <a href="#" onClick={() => {handleEdit(machine.id); setMachineId(machine.id)}}>
                  <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                    <PencilSquare className='text-primary' />
                  </OverlayTrigger>
                </a>
                &nbsp;
                <a href="#">
                  <OverlayTrigger overlay={<Tooltip>Hapus</Tooltip>}>
                    <Trash className='text-danger' />
                  </OverlayTrigger>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalForm
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        modalTitle={modalTitle}
        buttonTextForm={buttonTextForm}
        machineName={machineName}
        setMachineName={setMachineName}
        machines={machines}
        setMachines={setMachines}
        machineId={machineId}
      />
    </>
  )
}

export default DataList;