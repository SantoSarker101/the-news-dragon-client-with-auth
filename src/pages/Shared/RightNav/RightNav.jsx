import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
	return (
		<div className='mt-4'>
			<h4>Login With</h4>

			<Button className='my-2' variant="outline-primary"><FaGoogle/> Login with google</Button>

      		<Button variant="outline-secondary"><FaGithub/> Login with github</Button>


			<div className='mt-4'>
				<h4>Find us on</h4>

				<ListGroup>

					<ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>

					<ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>

					<ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>

				</ListGroup>
			</div>

			<QZone></QZone>

			<div>
				<img src={bg} alt="" />
			</div>
		</div>
	);
};

export default RightNav;