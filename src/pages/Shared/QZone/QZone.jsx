import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
	return (
		<div className='bg-secondary text-center my-4 py-4'>
			<h4>QZone</h4>

			<div>
				<img className='my-4' src={qZone1} alt="" />
				<img className='my-4' src={qZone2} alt="" />
				<img className='my-4' src={qZone3} alt="" />
			</div>
		</div>
	);
};

export default QZone;