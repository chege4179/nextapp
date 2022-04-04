import React from 'react';
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header/>
			<div className="w-full h-full flex items-center justify-center overflow-y-scroll mb-8">
				{ children }
			</div>
		</div>
	);
};

export default Layout;
