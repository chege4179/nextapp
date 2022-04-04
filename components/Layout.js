import React from 'react';
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full overflow-x-hidden">
			<Header/>
			<div className="w-full h-full flex items-center justify-center p-8 ">
				{ children }
			</div>
		</div>
	);
};

export default Layout;
