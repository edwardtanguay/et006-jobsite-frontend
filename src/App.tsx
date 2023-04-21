import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageJobs } from './pages/PageJobs';
import { PageSkills } from './pages/PageSkills';
import { PageWelcome } from './pages/PageWelcome';

function App() {
	return (
		<div className="App">
			<h1>Job Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/jobs">Jobs</NavLink>
				<NavLink to="/skills">Skills</NavLink>
			</nav>
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/jobs" element={<PageJobs />} />
				<Route path="/skills" element={<PageSkills />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
