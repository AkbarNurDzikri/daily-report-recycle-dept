import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FileEarmarkExcel } from 'react-bootstrap-icons';

const TombolExportLaporan = () => {
  return (
    <>
      <a href="#" className='text-reset'>
        <OverlayTrigger overlay={<Tooltip>Export Laporan</Tooltip>}>
            <FileEarmarkExcel className='fs-2 text-success' />
        </OverlayTrigger>
      </a>
    </>
  )
}

export default TombolExportLaporan;