import React, { ReactNode, createContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import DropDownCheckbox from '../components/DropDownCheckbox';
import { IDropDownCheckboxItem, IFruit } from '../models/Models';
import DropDownApi from '../api/DropDownApi';
import DisplaySelected from '../components/DisplaySelected';
import Indicator from '../components/Indicator';
import * as restHttp from '../http';
import './Sandbox.scss';

const Sandbox = () => {
	const sampleItems: IDropDownCheckboxItem[] = [
		{ id: 1, name: 'Mike', isChecked: false },
		{ id: 2, name: 'kieM', isChecked: false },
		{ id: 3, name: 'Mkie', isChecked: false },
	];

	useEffect(() => {
		dataCalls();
	}, []);

	const [dropdownItems, setDropDownItems] = useState(sampleItems);

	const [selectedItem, setSelectedItem] = useState<IDropDownCheckboxItem>({
		id: 1,
		name: 'Default',
		isChecked: false,
	});

	const getSelectedItem = (selectedItems: IDropDownCheckboxItem[]) => {
		console.log(selectedItems);
	};

	const dataCalls = async () => {
		const data: IFruit[] = await restHttp.http(
			'https://my-json-server.typicode.com/mikezano/zson/fruits',
		);
		console.log(data);
		setDropDownItems(data);
	};

	const DisplayFruit: ReactNode = (fruit: IFruit) => {
		return (
			<div>
				<span>{fruit.icon}</span>
				<span>{fruit.name}</span>
			</div>
		);
	};

	return (
		<DropDownApi.Provider value={sampleItems}>
			<Layout
				sidebar={
					<DropDownCheckbox
						items={dropdownItems}
						onSelection={getSelectedItem}
						display={<DisplayFruit />}
					/>
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
