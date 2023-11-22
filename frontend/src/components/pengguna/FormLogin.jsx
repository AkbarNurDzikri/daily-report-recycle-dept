import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { PersonLock, Key } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const FormLogin = ({
  formHandler,
  setUsername,
  username,
  setPassword,
  password
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
          <Form.Control type="text" placeholder="Username" autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} required autoFocus />
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

        <Button variant="primary" type='submit' className='w-100'>
          Login
        </Button>
        <p className='text-center mt-2' style={{fontSize: '0.8rem'}}>
          <span>Belum punya akun?</span> &nbsp;
          <Link to='/' >Daftar</Link>
        </p>
      </Form>
    </Container>
  )
}

export default FormLogin;