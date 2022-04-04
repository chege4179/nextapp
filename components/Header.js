import React from 'react';
import Link from "next/link"
import {useDispatch, useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {UserActions} from "../ReduxStore/UserConstants";


const Header = () => {
	const user = useSelector(SelectUser)
	const dispatch = useDispatch()
	const Logout = () => {
		dispatch({
			type:UserActions.LOGOUT_SUCCESS
		})
	}
	return (
		<div className="w-full h-16 bg-orange-500 flex items-center justify-end px-4 ">
			<Link href="/home">
				<button
					className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-4">
					Home
				</button>
			</Link>
			{
				user ? (

						<button
							onClick={Logout}
							className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
							Log Out
						</button>

				):(
					<Link href="/login">
						<button
							className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
							Log In
						</button>
					</Link>
				)
			}
		</div>
	);
};

export default Header;
