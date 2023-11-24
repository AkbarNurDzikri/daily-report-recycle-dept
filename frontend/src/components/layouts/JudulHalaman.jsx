import { InfoCircle } from 'react-bootstrap-icons';

const JudulHalaman = ({judulHalaman}) => {
  return (
    <>
      <h3 className='d-inline me-1'>{judulHalaman}</h3>
      <InfoCircle className='text-primary' style={{marginTop: '-20px'}} />
    </>
  )
}

export default JudulHalaman;