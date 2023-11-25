import { FloatingLabel, Form, Button, Container, Spinner } from 'react-bootstrap';
import formHandler from '../../../services/master/machines/formHandler';
import React, { useState } from 'react';


const FormInput = ({
  machineName,
  setMachineName,
  buttonTextForm,
  setMachines,
  handleCloseModal,
  machineId
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      setDisabledButton(true);
      await formHandler(e, machineName, setMachines, handleCloseModal, machineId, buttonTextForm);
    } finally {
      setIsLoading(false);
      setDisabledButton(false);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId='machineName' label='Nama Mesin' className='mb-3'>
          <Form.Control
            type="text"
            placeholder="Nama Mesin"
            autoComplete='off'
            autoFocus
            required
            value={machineName}
            onChange={(e) => setMachineName(e.target.value)} />
        </FloatingLabel>

        <div className="text-end">
          <Button type='submit' className='btn-sm' disabled={disabledButton}>
            {
              isLoading ?
                <span className='align-middle'>
                  <Spinner size='sm' className='me-2' />
                  {buttonTextForm}
                </span> :
              buttonTextForm
            }
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default FormInput;