import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IJob, ISkill } from './interfaces';
import axios from 'axios';

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';
const skillsUrl = 'http://localhost:3610/skills';

interface IAppContext {
	appTitle: string;
	jobs: IJob[];
	skills: ISkill[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'The Job Site';
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [skills, setSkills] = useState<ISkill[]>([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(jobsUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setSkills((await axios.get(skillsUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				jobs,
				skills
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
