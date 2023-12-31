import Modal from 'react-bootstrap/Modal';
import FormInput from './FormInput';

const ModalForm = ({
  showModal,
  handleCloseModal,
  modalTitle,
  buttonTextForm,
  machineName,
  setMachineName,
  setMachines,
  machineId
}) => {
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInput
            machineName={machineName}
            setMachineName={setMachineName}
            buttonTextForm={buttonTextForm}
            setMachines={setMachines}
            handleCloseModal={handleCloseModal}
            machineId={machineId}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;