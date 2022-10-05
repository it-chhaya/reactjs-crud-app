import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
	return (
		<Container fluid className='p-0'>
			<Navbar className='py-3 shadow' bg="primary" variant="dark">
						<Container>
							<Navbar.Brand href="#home">ISTAD</Navbar.Brand>
							<Nav className="w-100 justify-content-between">
								<div className='left-link'>
									<Link className="nav-link" to={'/'}>
										Home
									</Link>
									<Link className="nav-link" to={'/article'}>
										Article
									</Link>
									<Link className="nav-link" to={'/about'}>
										About
									</Link>
								</div>
								<div className='right-link'>
									<Link className="nav-link" to={'/register'}>
										Register
									</Link>
								</div>
							</Nav>
						</Container>
					</Navbar>
		</Container>
	)
}

export default MainNavbar
