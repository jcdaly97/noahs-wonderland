import { Link } from 'react-router-dom';
import daddyNoah from '../icons/daddyNoah.png'
import elfNoah from '../icons/elfNoah.png'
import fishNoah from '../icons/fishNoah.png'
import glassNoah from '../icons/glassNoah.png'
import seriousNoah from '../icons/seriousNoah.png'

function NavBar() {
	return (
		<div className='nav-bar'>
			<div className='links'>

				<div className='nav-card'>
					<Link to='/mission' className='nav-link'>
						<img src={daddyNoah}></img>
					</Link>
					<h4 className='link-text'>our mission</h4>
				</div>

				<div className='nav-card'>
					<Link to='/pics' className='nav-link'>
						<img src={elfNoah}></img>
					</Link>
					<h4 className='link-text'>pics</h4>
				</div>

				<div className='nav-card'>
					<Link to='/schedule' className='nav-link'>
						<img src={fishNoah}></img>
					</Link>
					<h4 className='link-text'>schedule</h4>
				</div>

				<div className='nav-card'>
					<Link to='/chat' className='nav-link'>
						<img src={glassNoah}></img>
					</Link>
					<h4 className='link-text'>chat</h4>
				</div>

				<div className='nav-card'>
					<Link to='/about' className='nav-link'>
						<img src={seriousNoah}></img>
					</Link>
					<h4 className='link-text'>about</h4>
				</div>
			</div>
		</div>
	);
}
export default NavBar