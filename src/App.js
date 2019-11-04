import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/pages/Home'
import Stuff from './components/pages/Stuff'
import Things from './components/pages/Things'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/"> 
						<Home />
					</Route>
					<Route exact path="/Stuff">
						<Stuff />
					</Route>
					<Route exact path="/Things">
						<Things />
					</Route>
				</Switch>
			</Router>
			<Sidebar />
		</>
	);
}

export default App;
