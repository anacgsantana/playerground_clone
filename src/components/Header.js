import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>PLAYERGROUND</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='Quartz' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Vod</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Live</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Prism' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Vod</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Live</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Labs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
