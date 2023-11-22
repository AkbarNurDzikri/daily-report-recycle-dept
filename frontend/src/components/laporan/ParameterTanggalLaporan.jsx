import { InputGroup, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

const ParameterTanggalLaporan = ({
  setParamDariTgl,
  paramDariTgl,
  setParamSampaiTgl,
  paramSampaiTgl
}) => {
  return (
    <div className='me-2'>
      <InputGroup>
        <OverlayTrigger overlay={<Tooltip>Dari Tanggal</Tooltip>}>
          <Form.Control type="date" value={paramDariTgl} onChange={(e) => setParamDariTgl(e.target.value)} />
        </OverlayTrigger>
        <InputGroup.Text>s.d.</InputGroup.Text>
        <OverlayTrigger overlay={<Tooltip>Sampai Tanggal</Tooltip>}>
          <Form.Control type="date" value={paramSampaiTgl} onChange={(e) => setParamSampaiTgl(e.target.value)} />
        </OverlayTrigger>
      </InputGroup>
    </div>
  )
}

export default ParameterTanggalLaporan;