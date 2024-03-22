import React, { useState } from 'react';
import Output from './components/Output';
import PertForm from './components/PertForm';

export type Pert = {
	optimistic: {
		value: number;
		timeUnit: 'hours' | 'days' | 'weeks';
	};
	mostLikely: {
		value: number;
		timeUnit: 'hours' | 'days' | 'weeks';
	};
	pessimistic: {
		value: number;
		timeUnit: 'hours' | 'days' | 'weeks';
	};
};
export default function App() {
	const [pert, setPert] = useState<Pert>({
		optimistic: {
			value: 0,
			timeUnit: 'hours',
			label: 'Optimistic',
		},
		mostLikely: {
			value: 0,
			timeUnit: 'hours',
			label: 'Most Likely',
		},
		pessimistic: {
			value: 0,
			timeUnit: 'hours',
			label: 'Pessimistic',
		},
	});
	const [hoursPerWeek, setHoursPerWeek] = useState(0);

	return (
		<>
			<PertForm
				state={pert}
				setState={setPert}
				hours={hoursPerWeek}
				setHours={setHoursPerWeek}
			/>
			<Output
				pert={pert}
				hours={hoursPerWeek}
			/>
		</>
	);
}
