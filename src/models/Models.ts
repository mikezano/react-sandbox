export interface IFruit extends IDropDownItem {
	icon: string;
	quantity: number;
	price: number;
	origin: string;
}

export interface IDropDownItem {
	id: number;
	name: string;
}

export interface IDropDownCheckboxItem extends IDropDownItem {
	isChecked: boolean;
}

export interface IFruit extends IDropDownCheckboxItem {
	icon: string;
	quantity: number;
	price: number;
	origin: string;
}
