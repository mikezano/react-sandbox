import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Slots from './views/Slots';
import Navbar from './components/Navbar';
import Sandbox from './views/Sandbox';
import './App.scss';

const App = () => {
	return (
		<Router>
			<Navbar />

			<Route path="/" exact component={Home} />
			<Route path="/about/" component={About} />
			<Route path="/slots" component={Slots} />
			<Route path="/sandbox" component={Sandbox} />
		</Router>
	);
};

export default App;
