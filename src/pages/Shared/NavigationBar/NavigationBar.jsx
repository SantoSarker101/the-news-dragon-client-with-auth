import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
	const {user,logOut} = useContext(AuthContext);

	const handleLogOut = () =>{
		logOut()
		.then()
		.catch(error => console.log(error))
	}
	return (
		<Container>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tartiary">

				<Container>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">

					<Nav className="mx-auto">



						<Link className='text-decoration-none ms-5 text-success' to='/'>Home</Link>


						<Link className='text-decoration-none ms-5 text-success'>About</Link>

						<Link className='text-decoration-none ms-5 text-success'>Career</Link>


					</Nav>


					<Nav>

						{
							user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>

						}




							{
								user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button>
								: <Link to='/login'>
									<Button variant="secondary">Login</Button>
								</Link>
							}



					</Nav>


					</Navbar.Collapse>

				</Container>

			</Navbar>
		</Container>
	);
};

export default NavigationBar;