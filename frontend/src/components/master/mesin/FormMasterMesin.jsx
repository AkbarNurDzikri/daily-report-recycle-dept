import { Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const FormMasterMesin = ({
  namaMesin,
  setNamaMesin,
  formHandler,
  isLoading
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    isLoading ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [isLoading])

  return (
    <>
      <Form onSubmit={formHandler} className='d-flex flex-column'>
        <FloatingLabel controlId='namaMesin' label='Nama Mesin' className='mb-3'>
          <Form.Control type="text" placeholder="Nama Mesin" value={namaMesin} onChange={(e) => setNamaMesin(e.target.value)} autoComplete='off' required />
        </FloatingLabel>

        <div className="d-flex justify-content-end">
          <Button variant="primary" type='submit' className='btn-sm w-25' disabled={buttonDisabled}>
            {isLoading ? <Spinner /> : 'Simpan'}
          </Button>
        </div>
      </Form>
    </>
  )
}
export default FormMasterMesin;