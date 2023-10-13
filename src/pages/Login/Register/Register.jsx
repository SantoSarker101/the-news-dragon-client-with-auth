import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
	const {createUser} = useContext(AuthContext);
	const [accepted,setAccepted] = useState(false);

	const handleRegister = event =>{
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name,photo,email,password);

		createUser(email,password)
		.then(result => {
			const createdUser = result.user
			console.log(createdUser);
		})
		.catch(error => {
			console.log(error);
		})
	}

	const handleAccepted = event => {
		setAccepted(event.target.checked);
	}
	return (
		<Container className='w-50 mx-auto'>

			<h2 className='text-center'>Register Your Account</h2>

			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-3" controlId="formBasicEmail">

					<Form.Label>Your Name</Form.Label>

					<Form.Control type="text" name='name' placeholder="Enter Your Name" required />

				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicEmail">

					<Form.Label>Photo URL</Form.Label>

					<Form.Control type="text" name='photo' placeholder="Photo URL" required />

				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicEmail">

					<Form.Label>Email address</Form.Label>

					<Form.Control type="email" name='email' placeholder="Enter email" required />

					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>

				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>

					<Form.Control type="password" name='password' placeholder="Password" required />
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
					onClick={handleAccepted}
					type="checkbox"
					name='accept'
					label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />

				</Form.Group>

      			<Button variant="primary" type="submit" disabled = {!accepted}>
        			Register
      			</Button>
				<br /><br />

				<Form.Text className="text-secondary">
					Already Have an Account? <Link to='/login'>Login</Link>
				</Form.Text>


				<Form.Text className="text-success">

				</Form.Text>


				<Form.Text className="text-danger">

				</Form.Text>
			</Form>

		</Container>
	);
};

export default Register;