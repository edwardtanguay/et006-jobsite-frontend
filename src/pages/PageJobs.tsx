import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageJobs = () => {
  const { jobs } = useContext(AppContext);

	return (
		<div className="pageJobs">
			<div className="jobs">
				{jobs.map(job => {
					return (
						<div className="job">
							<div className="publicationDate">{job.publicationDate}</div>
							<div className="title"><a target="_blank" href={job.url}>{job.title}</a> - {job.company}</div>
							<div className="skillList">{job.skillList}</div>
						</div>
					)
				})}
		</div>
		</div>
	);
};
