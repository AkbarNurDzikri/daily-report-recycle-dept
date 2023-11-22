import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Trash, PencilSquare, FiletypePdf } from 'react-bootstrap-icons';

const TableLaporan = () => {
  return (
    <>
      <Table hover responsive bordered>
        <thead className='align-middle text-center'>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Shift</th>
            <th>Mesin</th>
            <th>Operator</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody className='align-middle text-center'>
          <tr>
            <td>1</td>
            <td>17 Agustus 1945</td>
            <td>1</td>
            <td>YEI</td>
            <td>M. Robi Maulana</td>
            <td>
              <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <PencilSquare className='text-primary' />
                </a>
              </OverlayTrigger>
              
              <OverlayTrigger overlay={<Tooltip>Hapus</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <Trash className='text-danger' />
                </a>
              </OverlayTrigger>

              <OverlayTrigger overlay={<Tooltip>Print</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <FiletypePdf className='text-success' />
                </a>
              </OverlayTrigger>
              
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>18 Agustus 1945</td>
            <td>1</td>
            <td>YEI</td>
            <td>M. Iqbal</td>
            <td>
              <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <PencilSquare className='text-primary' />
                </a>
              </OverlayTrigger>
              
              <OverlayTrigger overlay={<Tooltip>Hapus</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <Trash className='text-danger' />
                </a>
              </OverlayTrigger>

              <OverlayTrigger overlay={<Tooltip>Print</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <FiletypePdf className='text-success' />
                </a>
              </OverlayTrigger>

            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>19 Agustus 1945</td>
            <td>2</td>
            <td>YEI</td>
            <td>Rudianto</td>
            <td>
              <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <PencilSquare className='text-primary' />
                </a>
              </OverlayTrigger>
              
              <OverlayTrigger overlay={<Tooltip>Hapus</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <Trash className='text-danger' />
                </a>
              </OverlayTrigger>

              <OverlayTrigger overlay={<Tooltip>Print</Tooltip>}>
                <a href="#" className='text-reset me-2'>
                  <FiletypePdf className='text-success' />
                </a>
              </OverlayTrigger>

            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default TableLaporan;