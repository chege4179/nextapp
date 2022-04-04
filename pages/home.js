import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {useForm} from "@mantine/form";
import countries from "../utils/countries";
import BaseURL from "../utils/BaseURL";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer,toast } from "react-toastify"
import {useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {useRouter} from "next/router";


const RegisterPage = () => {
	const router = useRouter()
	const [isLoading,setIsLoading] = useState(false)
	const form = useForm({
		initialValues: {
			firstName:"",
			lastName:"",
			email:"",
			area_code:"",
			phoneNumber:"",
			company:"",
			streetAddress1:"",
			streetAddress2:"",
			city:"",
			state:"",
			zipCode:"",
			country:"",
			website:"",
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});
	const user = useSelector(SelectUser)
	useEffect(() => {
		if (user === null){
			router.push("/login")
		}
	},[user])
	const RegisterUser = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const response = await fetch(`${BaseURL}/api/user`,{
				method:"POST",
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(form.values)
			})
			const res = await response.json()
			setIsLoading(false)
			if (res.success){
				toast.success(res.msg)
			}else {
				toast.error(res.msg)
			}
		}catch (e){
			console.log(e)
			toast.error("An unexpected error occurred")
		}
	}
	return (
		<Layout>
			<ToastContainer/>
			<div className="flex justify-center ">
				<div className="border-2 border-orange-500 p-4 rounded-3xl">
					<form className="w-full h-full max-w-2xl flex flex-col items-center justify-center" onSubmit={RegisterUser}>
						<div className="flex flex-wrap -mx-3 mb-6 w-full h-32 items-center justify-center border-b-orange-500 border-b-4">
							<h1 className="text-3xl font-bold">Webinar Registration Form</h1>
						</div>

						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className="block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
									  >
									Name
								</label>

							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

								<input
									{ ...form.getInputProps("firstName")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-orange-500"
									id="grid-first-name" type="text" placeholder="Jane"/>
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-first-name">
									First Name
								</label>

							</div>
							<div className="w-full md:w-1/3 px-3">

								<input
									{ ...form.getInputProps("lastName")}
									required={true}
									className=" border-orange-500 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name" type="text" placeholder="Doe"/>
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-last-name">
									Last Name
								</label>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className="block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Email
								</label>

							</div>
							<div className="w-full px-3 md:w-3/4">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-password">
									Email
								</label>
								<input
									{ ...form.getInputProps("email")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-password" type="email" placeholder="myname@gmail.com"/>

							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className=" whitespace-nowrap block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Work Phone
								</label>

							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

								<input
									{ ...form.getInputProps("area_code")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name" type="text" />
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-first-name">
									Area Code
								</label>

							</div>
							<div className="w-full md:w-1/3 px-3">

								<input
									{ ...form.getInputProps("phoneNumber")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name" type="text" />
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-last-name">
									Phone Number
								</label>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<h2
									className="block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2 pb-4"
								>
									Company
								</h2>

							</div>
							<div className="w-full px-3 md:w-3/4">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-password">
									Company
								</label>
								<input
									{ ...form.getInputProps("company")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="text" />

							</div>


						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<h2
									className="block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2 pb-4"
								>
									Company Address
								</h2>

							</div>
							<div className="w-full px-3 md:w-3/4">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-password">
									Street Address 1
								</label>
								<input
									{ ...form.getInputProps("streetAddress1")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="text" />

							</div>


						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<h2
									className="block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2 pb-4"
								>

								</h2>

							</div>
							<div className="w-full px-3 md:w-3/4">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-password">
									Street Address 2
								</label>
								<input
									{ ...form.getInputProps("streetAddress2")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="text" />

							</div>


						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className=" whitespace-nowrap block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
								>

								</label>

							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									  htmlFor="grid-first-name">
									City
								</label>
								<input
									{ ...form.getInputProps("city")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name" type="text" placeholder="Jane"/>

							</div>
							<div className="w-full md:w-1/3 px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									State/Province
								</label>
								<input
									{ ...form.getInputProps("state")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name" type="text" placeholder="Doe"/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className=" whitespace-nowrap block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
								>

								</label>

							</div>
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Zip Code
								</label>
								<input
									{ ...form.getInputProps("zipCode")}
									required={true}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name" type="text" placeholder="Jane"/>

							</div>
							<div className="w-full md:w-1/3 px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Country
								</label>
								<select
									required={true}
									{ ...form.getInputProps("country")}
									className="block appearance-none w-full bg-gray-200 border border-orange-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								>
									<option value=''>Select a Country</option>
									{
										countries.map((country,index) => {
											return(<option key={index} value={country.name}>{country.name}</option>)

										})
									}
								</select>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6 w-full">
							<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 flex items-center justify-center">
								<label
									className=" whitespace-nowrap block text-xl pb-4 tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Company Website
								</label>

							</div>
							<div className="w-full px-3 md:w-3/4">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								>
									Company Website
								</label>
								<input
									required={true}
									{ ...form.getInputProps("website")}
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									type="text" placeholder="myname@gmail.com"/>

							</div>
						</div>
						<div className="w-full flex items-center justify-center">
							<button
								disabled={isLoading}
								type="submit"
								className=" mt-6 block appearance-none w-1/2 bg-orange-500 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-indigo-500 focus:border-gray-500"
							>
								Submit
							</button>
						</div>
					</form>
				</div>


			</div>


		</Layout>
	);
};

export default RegisterPage;
