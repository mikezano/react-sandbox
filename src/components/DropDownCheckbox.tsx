import React, { ReactNode, useState, useEffect } from 'react';
import { IDropDownCheckboxItem } from '../models/Models';
import './DropDownCheckbox.scss';

interface DropDownProps {
	items: IDropDownCheckboxItem[];
	onSelection: (selectedItems: IDropDownCheckboxItem[]) => void;
	display?: ReactNode | null;
}

const DropDownCheckbox: React.FC<DropDownProps> = ({
	items,
	onSelection,
	display,
}) => {
	const [selectedItems, setSelectedItems] = useState<IDropDownCheckboxItem[]>(
		[],
	);
	const [isShowing, setIsShowing] = useState(false);

	//let selectedItems: IDropDownCheckboxItem[] = [];

	useEffect(() => {
		onSelection(selectedItems);
	});

	const toggleList = () => {
		setIsShowing(!isShowing);
	};

	const toggleOption = (event: React.ChangeEvent) => {
		const element = event.target as HTMLInputElement;
		const isChecked = element.checked;
		const id = element.getAttribute('id');
		const item = items.filter(x => x.id === Number(id))[0];
		if (isChecked) {
			setSelectedItems([...selectedItems, item]);
		} else {
			const index = selectedItems.indexOf(item);
			//selectedItems.splice(index, 1); // NEVER mutate state in React
			//debugger;
			setSelectedItems(selectedItems.filter(si => si.id !== item.id));
		}
	};

	return (
		<div className="dropdown">
			<div className="dropdown__selected" onClick={toggleList}>
				{selectedItems.length}
			</div>
			<ul
				className={`dropdown__list ${
					isShowing ? 'dropdown__list--active' : ''
				}`}
			>
				{items.map(item => {
					return (
						<li className="dropdown__item" key={item.id}>
							{display === null ? (
								<div>
									<input
										type="checkbox"
										id={String(item.id)}
										onChange={e => toggleOption(e)}
									/>
									<label htmlFor={String(item.id)}>{item.name}</label>
								</div>
							) : (
								display
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default DropDownCheckbox;
