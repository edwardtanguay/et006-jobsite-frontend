import { IJob } from "../interfaces";

interface IProps {
	job: IJob
}
export const Job = ({ job }: IProps) => {
	return (
		<div className="job">
			<div className="publicationDate">{job.publicationDate}</div>
			<div className="title">
				<a target="_blank" href={job.url}>
					{job.title}
				</a>{' '}
				- {job.company}
			</div>
			<div className="skillList">{job.skillList}</div>
		</div>
	);
};
