import React from 'react';
import { IDropDownCheckboxItem } from '../models/Models';

const DisplaySelected: React.FC<{ item: IDropDownCheckboxItem }> = ({
	item,
}) => {
	return (
		<div>
			<h2>{item.name}</h2>
			<h2>{item.id}</h2>
			<h2>{item.isChecked}</h2>
		</div>
	);
};

export default DisplaySelected;
