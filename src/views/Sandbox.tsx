import React from 'react';
import Layout from '../components/Layout';
import Sample from '../components/Sample';
import Dropdown from '../components/Dropdown';
import { IDropDownItem } from '../models/Models';

const Sandbox = () => {
	const sampleItems: IDropDownItem[] = [
		{ id: 1, name: 'Mike' },
		{ id: 2, name: 'kieM' },
		{ id: 3, name: 'Mkie' },
	];

	return (
		<Layout
			sidebar={<Dropdown class="sj" items={sampleItems} />}
			content={<Sample />}
		/>
	);
};

export default Sandbox;
