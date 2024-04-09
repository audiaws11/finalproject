import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { useLocation } from 'react-router-dom';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AppNavbar() {
    const location = useLocation();

    const isActive = (path) => {
      return location.pathname === path ? 'nav-link-active' : '';
    };
    
    return (
        <Navbar collapseOnSelect expand="lg"  fixed="top" className="navbar" >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src="/image2vector.svg" alt="logo" className="logo" style={{ width: '60px', height: '60px' }} />
                         Kaja
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link className={isActive('/')}>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link className={isActive('/login')}>Activity</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/offer">
                            <Nav.Link className={isActive('/offer')}>Our Offer</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/login">
                            <Nav.Link className="nav-style">
                                <button className='btn rounded-5 border-0'><i className="bi bi-person"></i> Login / Register</button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
