import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { PersonLock, Key, KeyFill, Type, Fingerprint } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const FormPendaftaran = ({
  formHandler,
  setUsername,
  username,
  setPassword,
  password,
  setKonfirmPassword,
  konfirmPassword,
  setNamaLengkap,
  namaLengkap,
  setNamaIbuKandung,
  namaIbuKandung
}) => {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{height: '100vh'}}>
      <Form onSubmit={formHandler}>
        <FloatingLabel
          controlId='username'
          label={
            <span>
              <PersonLock className='me-3' />
              Username
            </span>
          }
          className='mb-3'
        >
          <Form.Control type="text" placeholder="Username" autoComplete='off' value={username} onChange={(e) => {
            const noSpacesValue = e.target.value.replace(/\s/g, '');
            setUsername(noSpacesValue)}
          } required autoFocus />
        </FloatingLabel>

        <FloatingLabel
          controlId='password'
          label={
            <span>
              <Key className='me-3' />
              Password
            </span>
          }
          className='mb-3'
        >
          <Form.Control type="password" placeholder="Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FloatingLabel>

        <FloatingLabel
          controlId='konfirmasiPassword'
          label={
            <span>
              <KeyFill className='me-3' />
              Konfirmasi Password
            </span>
          }
          className='mb-3'
        >
          <Form.Control type="password" placeholder="Konfirmasi Password" autoComplete='off' value={konfirmPassword} onChange={(e) => {
            setKonfirmPassword(e.target.value);
          }} required />
        </FloatingLabel>

        <FloatingLabel
          controlId='namaLengkap'
          label={
            <span>
              <Type className='me-3' />
              Nama Lengkap
            </span>
          }
          className='mb-3'
        >
          <Form.Control type="text" placeholder="Nama Lengkap" autoComplete='off' value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} required />
        </FloatingLabel>

        <FloatingLabel
          controlId='namaIbuKandung'
          label={
            <span>
              <Fingerprint className='me-3' />
              Nama Ibu Kandung
            </span>
          }
          className='mb-3'
        >
          <Form.Control type="text" placeholder="Nama Ibu Kandung" autoComplete='off' value={namaIbuKandung} onChange={(e) => setNamaIbuKandung(e.target.value)} required />
        </FloatingLabel>

        <Button variant="primary" type='submit' className='w-100'>
          Daftar
        </Button>
        <p className='text-center mt-2' style={{fontSize: '0.8rem'}}>
          <span>Sudah punya akun?</span> &nbsp;
          <Link to='/login' >Login</Link>
        </p>
      </Form>
    </Container>
  )
}

export default FormPendaftaran