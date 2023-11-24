import { useEffect } from 'react';
import { OverlayTrigger, Tooltip, Col, Button } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

const TombolBuatMasterMesin = ({handleShow, setTextButton}) => {
  const handleClick = () => {
    handleShow();
    setTextButton('Simpan');
  }
  return (
    <>
      <OverlayTrigger overlay={<Tooltip>Buat Master Mesin</Tooltip>} >
        <Button variant='primary' onClick={handleClick}><PlusSquare /> Baru</Button>
      </OverlayTrigger>
    </>
  )
}

export default TombolBuatMasterMesin;