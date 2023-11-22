import NavbarComponent from '../../components/layouts/NavbarComponent.jsx';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <NavbarComponent />
      <Container className='mt-5 text-center'>
        <h3>Dashboard Page</h3>
      </Container>
    </>
  )
}

export default Dashboard;