import React from 'react';

export default function TimeModifier({ timeUnit, onTimeUnitChange }) {
	return (
		<select
			className="form-select"
			selected={timeUnit}
			onChange={onTimeUnitChange}>
			<option value="hours">Hours</option>
			<option value="days">Days</option>
			<option value="weeks">Weeks</option>
		</select>
	);
}
