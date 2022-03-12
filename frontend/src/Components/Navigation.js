import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkStyle = { textDecoration: "none", color: "white" };

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">👨‍⚕️💊Ephicient💊👩‍⚕️</Navbar.Brand>

                <Nav>
                    <Nav.Link>
                        <Link to="/" style={LinkStyle}>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/patient" style={LinkStyle}>
                            Patient-Login
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/patient-dashboard" style={LinkStyle}>
                            Patient-Dashboard
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/pharmacist" style={LinkStyle}>
                            Pharmacy-Login
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/pharmacist-dashboard" style={LinkStyle}>
                            Pharmacy-Dashboard
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
