import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IJob } from './interfaces';
import axios from 'axios';

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';

interface IAppContext {
	appTitle: string;
	jobs: IJob[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'The Job Site';
	const [jobs, setJobs] = useState<IJob[]>([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(jobsUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				jobs
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
