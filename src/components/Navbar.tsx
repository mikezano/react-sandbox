import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about/">About</Link>
				</li>
				<li>
					<Link to="/slots">Slots</Link>
				</li>
				<li>
					<Link to="/sandbox">Sandbox</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
