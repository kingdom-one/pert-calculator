import React, { useState, useEffect } from 'react';
import { Pert } from '../App';

function calcPERT(
	{ optimistic, mostLikely, pessimistic }: Pert,
	hours: number,
): number {
	const optimisticHours = handledHours(optimistic, hours);
	const mostLikelyHours = handledHours(mostLikely, hours);
	const pessimisticHours = handledHours(pessimistic, hours);
	const expected =
		(optimisticHours + 4 * mostLikelyHours + pessimisticHours) / 6;
	return expected;
}

function handledHours(
	{ value, timeUnit }: { value: number; timeUnit: 'hours' | 'days' | 'weeks' },
	hours,
): number {
	const timeUnitToHours = {
		hours: 1,
		days: 8,
		weeks: hours,
	};
	const mod = timeUnitToHours[timeUnit];
	return value * mod;
}

export default function Output({ pert, hours }) {
	const [expected, setExpected] = useState(0);
	const [talentHours, setTalentHours] = useState(0);

	useEffect(() => {
		const expectedHours = calcPERT(pert, hours);
		setExpected(expectedHours);
		setTalentHours((expectedHours / 16).toPrecision(2));
	}, [pert, hours]);

	return (
		<div className="output border border-2 border-primary rounded-5 p-4 shadow-lg">
			<h2 className="fs-3 fw-bold mb-3">PERT Estimates</h2>
			<ul className="list-unstyled">
				<li>
					<span className="fw-normal">PERT Estimated Hours:</span>{' '}
					{`${Math.round(expected)}`}
				</li>
				<li>
					<span className="fw-normal">K1 Talent Hours:</span> {talentHours}
				</li>
				<li>
					<span className="fw-normal">Actual Days:</span>{' '}
					{`${Math.round(expected / 8)}`}
				</li>
			</ul>
		</div>
	);
}
