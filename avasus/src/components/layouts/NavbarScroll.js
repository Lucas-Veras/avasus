import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import './NavbarScroll.css'

const NavbarScroll = () => {
  return (
    <Navbar className='bgWhite ps-xxl-5 ps-xl-2 ps-2 pm-4 pt-4 pb-4 pe-xxl-5 pe-2 sombra' expand="xxl" fixed="top">
      <Container fluid>
        <Navbar.Brand className='ps-xxl-4 ps-2 me-3' href='/' title='Avasus'><img src={logo} alt="Avasus" className='logoPrincipal' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href='/' className='navlink fw600 fontSmall pe-xxl-2' >Início</Nav.Link>
            <Nav.Link href='#' className='navlink fw600 fontSmall pe-xxl-2'>Sobre Nós</Nav.Link>
            <Nav.Link href='/modulosEducacionais' className='navlink fw600 fontSmall pe-xxl-2'>Cursos</Nav.Link>
            <Nav.Link href='/parceiros' className='navlink fw600 fontSmall pe-xxl-2'>Parceiros</Nav.Link>
            <Nav.Link href='/transparencia' className='navlink fw600 fontSmall pe-xxl-2'>Transparência</Nav.Link>
            <Nav.Link href='#' className='navlink fw600 fontSmall pe-xxl-2'>Contato</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-xxl-3"
              id='inputSearch'
              aria-label="Search"
            />
          </Form>
          <Nav>
            <Nav.Link href='#' className='navButton navButton1 fontSmall bgWhite me-xxl-2 fw600'>Entrar</Nav.Link>
            <Nav.Link href='#' className='navButton navButton2 fontSmall text-white fw600'>Cadastrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;