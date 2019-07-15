import React from 'react';
import Layout from '../components/Layout';
import Sample from '../components/Sample';
const Slots = () => {
	return <Layout sidebar={<Sample />} content={<Sample />} />;
};

export default Slots;
