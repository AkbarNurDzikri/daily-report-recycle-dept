import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container, Card, Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';

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
  namaIbuKandung,
  isLoading
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    isLoading ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [isLoading])

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
      <Card className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#00A9FF'}}>
        <Card.Body>
          <Form onSubmit={formHandler} className='my-4 mx-3'>
            <FloatingLabel controlId='namaLengkap' label='Nama Lengkap' className='mb-2' >
              <Form.Control type="text" placeholder="Nama Lengkap" autoComplete='off' required value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId='namaIbuKandung' label='Nama Ibu Kandung' className='mb-2' >
              <Form.Control type="text" placeholder="Nama Ibu Kandung" autoComplete='off' required value={namaIbuKandung} onChange={(e) => setNamaIbuKandung(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId='username' label='Username' className='mb-2' >
              <Form.Control type="text" placeholder="Username" autoComplete='off' required value={username} onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId='password' label='Password' className='mb-2' >
              <Form.Control type="password" placeholder="Password" autoComplete='off' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId='konfirmPassword' label='Konfirm Password' className='mb-2' >
              <Form.Control type="password" placeholder="Konfirm Password" autoComplete='off' required value={konfirmPassword} onChange={(e) => setKonfirmPassword(e.target.value)} />
            </FloatingLabel>

            <Button type='submit' className='w-100 btn-dark' disabled={buttonDisabled}>
              {
                isLoading ? <Spinner /> : 'Daftar'
              }
            </Button>

            <p className='text-white text-center mt-2' style={{fontSize: '0.9rem'}}>
              Sudah punya akun? <Link to='/login' className='text-dark text-decoration-none'><b>Login</b></Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default FormPendaftaran;