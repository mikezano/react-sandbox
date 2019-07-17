import React, { createContext, useState } from 'react';
import Layout from '../components/Layout';
import Sample from '../components/Sample';
import DropDownCheckbox from '../components/DropDownCheckbox';
import { IDropDownCheckboxItem } from '../models/Models';
import DropDownApi from '../api/DropDownApi';
import DisplaySelected from '../components/DisplaySelected';

const Sandbox = () => {
	const sampleItems: IDropDownCheckboxItem[] = [
		{ id: 1, name: 'Mike', isChecked: false },
		{ id: 2, name: 'kieM', isChecked: false },
		{ id: 3, name: 'Mkie', isChecked: false },
	];

	const [dropdownItems, setDropDownItems] = useState(sampleItems);

	const [selectedItem, setSelectedItem] = useState<IDropDownCheckboxItem>({
		id: 1,
		name: 'Default',
		isChecked: false,
	});

	const getSelectedItem = (selectedItems: IDropDownCheckboxItem[]) => {
		console.log(selectedItems);
	};

	return (
		<DropDownApi.Provider value={sampleItems}>
			<Layout
				sidebar={
					<DropDownCheckbox items={sampleItems} onSelection={getSelectedItem} />
				}
				content={<DisplaySelected item={selectedItem} />}
			/>
		</DropDownApi.Provider>
	);
};

export default Sandbox;
