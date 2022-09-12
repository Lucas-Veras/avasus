import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './NavbarScroll.css'

const NavbarScroll = () => {
  return (
    <Navbar className='bgWhite ps-xxl-4 ps-xl-2 ps-2 pm-4 pt-4 pb-4 pe-xxl-5 pe-2 sombra' expand="xxl" fixed="top">
      <Container fluid>
        <Navbar.Brand className='ps-xxl-4 ps-2 me-3'><Link to='/'><img src={logo} alt="Avasus" className='logoPrincipal'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link><Link to='/' className='navlink fontSmall pe-xxl-2'>Início</Link></Nav.Link>
            <Nav.Link><Link to='' className='navlink fontSmall pe-xxl-2'>Sobre Nós</Link></Nav.Link>
            <Nav.Link><Link to='' className='navlink fontSmall pe-xxl-2'>Cursos</Link></Nav.Link>
            <Nav.Link><Link to='' className='navlink fontSmall pe-xxl-2'>Parceiros</Link></Nav.Link>
            <Nav.Link><Link to='' className='navlink fontSmall pe-xxl-2'>Transparência</Link></Nav.Link>
            <Nav.Link><Link to='' className='navlink fontSmall pe-xxl-2'>Contato</Link></Nav.Link>
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
            <Nav.Link><Link to='#' className='navButton navButton1 bgWhite'>Entrar</Link></Nav.Link>
            <Nav.Link><Link to='#' className='navButton navButton2 white'>Cadastrar</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;