import React from 'react';
import logo from '../logo.svg';
import './Home.scss';
import { IDropDownItem } from '../models/Models';

const Home: React.FC = () => {
	const sampleItems: IDropDownItem[] = [
		{ id: 1, name: 'Mike' },
		{ id: 2, name: 'kieM' },
		{ id: 3, name: 'Mkie' },
	];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				{/* <Dropdown items={sampleItems} /> */}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default Home;
