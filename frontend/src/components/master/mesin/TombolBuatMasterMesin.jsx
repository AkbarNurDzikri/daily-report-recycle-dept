import { OverlayTrigger, Tooltip, Col, Button } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

const TombolBuatMasterMesin = ({handleShow}) => {
  return (
    <>
      <OverlayTrigger overlay={<Tooltip>Buat Master Mesin</Tooltip>} >
        <Button variant='primary' className='btn-sm' onClick={handleShow}><PlusSquare /> Baru</Button>
      </OverlayTrigger>
    </>
  )
}

export default TombolBuatMasterMesin;