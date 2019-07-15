import React, { useState } from 'react';
import { IDropDownItem } from '../models/Models';
import './Dropdown.scss';

const Dropdown: React.FC<{ items: IDropDownItem[] }> = ({ items }) => {
	//const [items, setItems] = useState(dropdownItems);
	let selectedItem: IDropDownItem = {
		id: 0,
		name: 'Select Item',
	};

	let selectedItems: IDropDownItem[] = [];
	//let isShowing: boolean = false;

	const toggleList = () => {
		setIsShowing(!isShowing);
	};

	const [isShowing, setIsShowing] = useState(false);

	const toggleOption = (event: React.ChangeEvent) => {
		const element = event.target as HTMLInputElement;
		const isChecked = element.checked;
		const id = element.getAttribute('id');
		const item = items.filter(x => x.id === Number(id))[0];

		if (isChecked) {
			selectedItems.push(item);
		} else {
			const index = selectedItems.indexOf(item);
			selectedItems.splice(index, 1);
		}
		console.log(selectedItems);
		//this.$emit('onSelectedItemsChanged', this.selectedItems);
	};

	return (
		<div className="dropdown">
			<div className="dropdown__selected" onClick={toggleList}>
				{selectedItem.name}
			</div>
			<ul
				className={`dropdown__list ${
					isShowing ? 'dropdown__list--active' : ''
				}`}
			>
				{items.map(item => {
					return (
						<li className="dropdown__item" key={item.id}>
							<input
								type="checkbox"
								id={String(item.id)}
								onChange={e => toggleOption(e)}
							/>
							<label htmlFor={String(item.id)}>{item.name}</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
