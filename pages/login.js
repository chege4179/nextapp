import React from 'react';
import Layout from "../components/Layout";
import {useForm} from "@mantine/form";
import {useDispatch} from "react-redux";
import {UserActions} from "../ReduxStore/UserConstants";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useRouter} from "next/router";
const LoginPage = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const form = useForm({
		initialValues:{
			email:"",
			password:""
		},
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	})
	const LoginUser = (e) => {
		e.preventDefault()
		console.log(form.values)
		if (form.values.email ==="test@gmail.com" && form.values.password ==="testpassword"){
			dispatch({
				type:UserActions.LOGIN_SUCCESS,
				payload:form.values
			})
			router.push("/home")
		}else {
			toast.error("Wrong credentials")
		}
	}
	return (
		<Layout>
			<ToastContainer/>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full max-w-sm">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"onSubmit={LoginUser}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Email Address
							</label>
							<input
								{ ...form.getInputProps("email") }
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username" type="text" placeholder="Username"/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
								Password
							</label>
							<input
								{ ...form.getInputProps("password") }
								className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password" type="password" placeholder="******************"/>

						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit">
								Sign In
							</button>
							<a className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
							   href="#">
								Forgot Password?
							</a>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						&copy; {new Date().getFullYear()} My Web App All rights reserved.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
