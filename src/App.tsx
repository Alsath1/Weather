/** @format */
import './css/index.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';
const App = () => {
	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/mounth-statistics' Component={MonthStatistics} />
			</Routes>
		</div>
	);
};

export default App;
