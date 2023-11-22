import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary" style={{padding: 0}} fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <Image src='/images/bfi-logo.png' style={{width: '3rem'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/laporan">Laporan</Nav.Link>
              <NavDropdown title="Master" id="basic-nav-dropdown">
                <NavDropdown.Item href="/master/mesin">Master Mesin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Master Material</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Master Product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Other Master</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated Master
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;