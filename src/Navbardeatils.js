import { NavLink } from "react-router-dom";
import {Container,Navbar,Nav} from 'react-bootstrap';

function Header(){
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <NavLink className='navbarinpage' to='/'>Home</NavLink>  
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink className='navbarinpage' to='/about'>About</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink  className='navbarinpage' to='/blog'>Blog</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink className='navbarinpage' to='/contect'>Contect</NavLink>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
export default Header;