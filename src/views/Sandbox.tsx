import React, { createContext, useState } from 'react';
import Layout from '../components/Layout';
import DropDownCheckbox from '../components/DropDownCheckbox';
import { IDropDownCheckboxItem } from '../models/Models';
import DropDownApi from '../api/DropDownApi';
import DisplaySelected from '../components/DisplaySelected';
import Indicator from '../components/Indicator';
import './Sandbox.scss';

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
				content={
					<div className="indicator-container">
						{/* <DisplaySelected item={selectedItem} /> */}
						<Indicator value={1} details={'Hi'} hasGraph={false} />
						<Indicator value={100} details={'One hundred'} hasGraph={false} />
						<Indicator value={32} details={'Thirty-two'} hasGraph={true} />
					</div>
				}
			/>
		</DropDownApi.Provider>
	);
};

export default Sandbox;
