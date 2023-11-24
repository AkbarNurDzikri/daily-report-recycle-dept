import { Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap';
import Logo from '/images/bfi-logo-transparent.png';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const menu = [
    {
      label: 'Dashboard',
      location: '/dashboard'
    },
    {
      label: 'Laporan',
      location: '/report'
    },
  ];

  const masterMenu = [
    {
      label: 'Users',
      location: '/master/users'
    },
    {
      label: 'Machines',
      location: '/master/machines'
    },
    {
      label: 'Products',
      location: '/master/products'
    },
    {
      label: 'Materials',
      location: '/master/materials'
    },
  ];

  return (
    <>
      <Navbar data-bs-theme='dark' collapseOnSelect expand="lg" className="p-0" fixed='top' style={{backgroundColor: 'rgba(0,0,0,0.75)'}}>
        <Container>
          <Navbar.Brand href="/dashboard">
            <Card className='bg-light rounded-circle'>
              <img src={Logo} alt="Logo" style={{width: '3rem'}} />
            </Card>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            {menu.map((m) => (
              <Nav.Link key={m.label} as={Link} to={m.location}>
                  {m.label}
              </Nav.Link>
            ))}
              <NavDropdown title="Master" id="collapsible-nav-dropdown">
              {masterMenu.map((menu) => (
                <NavDropdown.Item key={menu.label} as={Link} to={menu.location}>
                    {menu.label}
                </NavDropdown.Item>
              ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;