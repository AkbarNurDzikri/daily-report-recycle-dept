import Modal from 'react-bootstrap/Modal';
import FormInput from './FormInput';

const ModalForm = ({
  showModal,
  handleCloseModal,
  modalTitle,
  buttonTextForm,
  machineName,
  setMachineName,
  machines,
  setMachines
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
            machines={machines}
            setMachines={setMachines}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;