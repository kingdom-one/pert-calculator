import React from 'react';
import TimeModifier from './TimeModifier';

export default function PertForm({ state, setState, hours, setHours }) {
	return (
		<form className="my-4 border bg-gradient shadow-lg border-primary text-bg-primary rounded-5 p-4">
			{Object.keys(state).map((key) => {
				return (
					<div
						className="row mb-3 align-items-end"
						key={key}>
						<div className="col-auto">
							<label
								className="form-label"
								htmlFor={key}>
								{state[key].label}:
							</label>
							<input
								id={key}
								type="number"
								className="form-control"
								value={state[key].value}
								onChange={(ev) => {
									setState((prevState) => {
										return {
											...prevState,
											[key]: {
												...prevState[key],
												value:
													Number(ev.target.value) >= 0
														? Number(ev.target.value)
														: 0,
											},
										};
									});
								}}
							/>
						</div>
						<div className="col-auto">
							<TimeModifier
								timeUnit={state[key].timeUnit}
								onTimeUnitChange={(ev) => {
									setState((prevState) => {
										return {
											...prevState,
											[key]: {
												...prevState[key],
												timeUnit: ev.target.value,
											},
										};
									});
								}}
							/>
						</div>
					</div>
				);
			})}
			{Object.values(state).some((value) => value.timeUnit === 'weeks') && (
				<div className="row mb-3 align-items-end">
					<div className="col-auto">
						<label
							className="form-label"
							htmlFor="pessimistic">
							Hours Per Week:
						</label>
						<input
							id="pessimistic"
							type="number"
							className="form-control"
							value={hours || ''}
							onChange={(ev) => {
								setHours(Number(ev.target.value));
							}}
						/>
					</div>
				</div>
			)}
		</form>
	);
}
