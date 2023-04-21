import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
  const { jobs } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<p>There are {jobs.length} jobs.</p>
		</div>
	);
};
