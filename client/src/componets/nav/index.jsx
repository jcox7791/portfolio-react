import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* need to figure out routes */}
                    <Navbar.Brand href="" >
                        <Image src="../../images/me" rounded />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {/* need to figure out routes */}
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Portfolio</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};
export default NavBar