import React, { useState } from 'react';
import './Indicator.scss';

interface IndicatorProps {
	value: number;
	details: string;
	hasGraph: boolean;
}
const Indicator: React.FC<IndicatorProps> = ({ value, details, hasGraph }) => {
	let graph: JSX.Element | null = null;
	const displayGraph = () => {
		if (hasGraph) {
			graph = <h2>I'm a graph</h2>;
		}
		return graph;
	};
	return (
		<div className="indicator">
			<div className="indicator__value">{value}</div>
			{displayGraph()}
			<div className="indicator__details">{details}</div>
		</div>
	);
};
export default Indicator;
