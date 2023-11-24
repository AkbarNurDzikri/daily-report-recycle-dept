import { Modal } from 'react-bootstrap';
import FormMasterMesin from './FormMasterMesin';

const ModalForm = ({
  showModal,
  handleClose,
  namaMesin,
  setNamaMesin,
  formHandler,
  isLoading,
  textButton,
}) => {
  return (
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
            textButton={textButton}
          />
        </Modal.Body>
      </Modal>
  )
}

export default ModalForm;