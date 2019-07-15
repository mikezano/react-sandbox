import React, { ReactNode } from 'react';
import './Layout.scss';

interface LayoutProps {
	sidebar: ReactNode;
	content: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ sidebar, content }) => {
	return (
		<div className="layout">
			<section className="layout__sidebar">{sidebar}</section>
			<section className="layout__content">{content}</section>
		</div>
	);
};

export default Layout;
