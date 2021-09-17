import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div className='nav-bar'>
			<div className='home-button'>
				<Link to='/' className='home-button'>home</Link>
			</div>
			<div className='links'>
				<Link to='/mission' className='nav-link'>Our Mission</Link>
				<Link to='/pics' className='nav-link'>Pics</Link>
				<Link to='/schedule' className='nav-link'>Schedule</Link>
				<Link to='/chat' className='nav-link'>Chat</Link>
				<Link to='/about' className='nav-link'>About</Link>
			</div>
		</div>
	);
}
export default NavBar