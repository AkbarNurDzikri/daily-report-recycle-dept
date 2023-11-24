import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Trash, PencilSquare, FiletypePdf } from 'react-bootstrap-icons';
import getMesinById from '../../../services/master/mesin/servisGetMesinById.js';
import ModalForm from './ModalForm.jsx';

const TableMasterMesin = ({
  machines,
  handleShow,
  showModal,
  handleClose,
  namaMesin,
  setNamaMesin,
  formHandler,
  isLoading,
  setTextButton
}) => {
  const handleEdit = async (id) => {
    const mesin = await getMesinById(id);
    handleShow();
    setNamaMesin(mesin.nama_mesin)
    setTextButton('Update');
  }
  return (
    <>
      <Table hover striped responsive bordered>
        <thead className='align-middle text-center'>
          <tr>
            <th>No</th>
            <th>Nama Mesin</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody className='align-middle text-center'>
          {
            machines && machines.map((machine, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{machine.nama_mesin}</td>
                <td>
                  <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                    <a href="#" className='text-reset me-2' onClick={() => handleEdit(machine.id)}>
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
            ))
          }
        </tbody>
      </Table>

      <ModalForm
        showModal={showModal}
        handleClose={handleClose}
        namaMesin={namaMesin}
        setNamaMesin={setNamaMesin}
        formHandler={formHandler}
        isLoading={isLoading}
      />
    </>
  )
}

export default TableMasterMesin;