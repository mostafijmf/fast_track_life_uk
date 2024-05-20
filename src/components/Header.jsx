import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../scss/header.scss';

const Header = () => {
    return (
        <header className='w-100'>
            <div className='bg-primary text-white'>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className='nav-phone py-2'>
                        <i className="fa-solid fa-phone text-danger me-3"></i>
                        <span className='fs-6 fw-medium'>
                            01158376502 | 07913256387
                        </span>
                    </div>
                    <div className="border-start border-black px-4 py-2">
                        <a href="/login" className='text-uppercase fw-medium text-white link-underline link-underline-opacity-0'>
                            <i className="fa-solid fa-user me-2"></i>
                            Login
                        </a>
                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="../../public/images/Fast-Track-Training-1.webp"
                            alt="fast track life uk"
                            className="h-auto"
                            width={220}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold text-uppercase" style={{ fontSize: '14px' }}>
                            <Nav.Link className="nav-link-hover px-3" href="#features">Home</Nav.Link>
                            <Nav.Link className="nav-link-hover px-3" href="#pricing">Guarantees</Nav.Link>
                            <NavDropdown className="nav-link-hover px-3" title="Our Courses" id="collapsible-nav-dropdown">
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.1">
                                    Life In The UK
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.2">
                                    Driving Theory
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    A1 English
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    A2 English
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    B1 English
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    B1 Worker Visa
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    Lorry HVG Training
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    Gedling Taxi Training
                                </NavDropdown.Item>
                                <NavDropdown.Item className="fw-normal text-capitalize bg-primary text-white py-2 px-4" href="#action/3.3">
                                    Wolverhampton Taxi Training
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-link-hover px-3" href="#features">About Us</Nav.Link>
                            <Nav.Link className="nav-link-hover px-3" href="#features">Testimonials</Nav.Link>
                            <Nav.Link className="nav-link-hover px-3" href="#features">Blog</Nav.Link>
                            <Nav.Link className="nav-link-hover px-3" href="#features">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;