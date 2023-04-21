import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Job } from '../components/Job';

export const PageJobs = () => {
  const { jobs } = useContext(AppContext);

	return (
		<div className="pageJobs">
			<div className="jobs">
				{jobs.map(job => {
					return <Job job={job} />
				})}
		</div>
		</div>
	);
};
