import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container, Card, Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';

const FormLogin = ({
  formHandler,
  setUsername,
  username,
  setPassword,
  password,
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
            <FloatingLabel controlId='username' label='Username' className='mb-2' >
              <Form.Control type="text" placeholder="Username" autoComplete='off' required autoFocus value={username} onChange={(e) => setUsername(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId='password' label='Password' className='mb-2' >
              <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </FloatingLabel>

            <Button type='submit' className='w-100 btn-dark' disabled={buttonDisabled}>
              {
                isLoading ? <Spinner /> : 'Login'
              }
            </Button>

            <p className='text-white text-center mt-2' style={{fontSize: '0.9rem'}}>
              Belum punya akun? <Link to='/' className='text-dark text-decoration-none'><b>Daftar</b></Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default FormLogin;