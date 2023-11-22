import { InputGroup, Form, Dropdown, DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const ParameterPencarianLaporan = () => {
  return (
    <div>
      <InputGroup>
        <DropdownButton variant="outline-secondary" title="Filter by" >
          <Dropdown.Item href="#">Shift</Dropdown.Item>
          <Dropdown.Item href="#">Mesin</Dropdown.Item>
          <Dropdown.Item href="#">Operator</Dropdown.Item>
        </DropdownButton>

        <Form.Control placeholder='Cari Laporan' />

        <InputGroup.Text>
          <OverlayTrigger overlay={<Tooltip>Tampilkan Data</Tooltip>}>
              <a href="#" className='text-reset'>
                <Search />
              </a>
            </OverlayTrigger>
        </InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default ParameterPencarianLaporan;