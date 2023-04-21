import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
  const { jobs, skills } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<p>There are {jobs.length} jobs.</p>
			<p>There are {skills.length} skills.</p>
		</div>
	);
};
