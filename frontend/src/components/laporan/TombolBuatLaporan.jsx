import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FileEarmarkPlus } from 'react-bootstrap-icons';

const TombolBuatLaporan = () => {
  return (
    <div className='d-flex'>
      <a href="#" className='text-reset'>
        <OverlayTrigger overlay={<Tooltip>Buat Laporan</Tooltip>}>
            <FileEarmarkPlus className='fs-2 text-primary' />
        </OverlayTrigger>
      </a>
    </div>
  )
}

export default TombolBuatLaporan;