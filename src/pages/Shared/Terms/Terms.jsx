import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<div>
			<h2>Terms and conditions</h2>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat, suscipit in non aut error odio tenetur, vitae delectus aperiam quibusdam repellendus recusandae amet eum dignissimos possimus ipsa, quod molestiae.</p>

			<p>Go back to <Link to='/register'>Register</Link></p>
		</div>
	);
};

export default Terms;