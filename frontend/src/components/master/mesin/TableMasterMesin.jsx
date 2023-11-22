import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Trash, PencilSquare, FiletypePdf } from 'react-bootstrap-icons';

const TableMasterMesin = () => {
  return (
    <>
      <Table hover responsive bordered>
        <thead className='align-middle text-center'>
          <tr>
            <th>No</th>
            <th>Nama Mesin</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody className='align-middle text-center'>
          <tr>
            <td>1</td>
            <td>YEI</td>
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

export default TableMasterMesin;