import { useState } from "react";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";


export default function LoginForm(props){
	const navigate = useNavigate();
	let setIsLoggedIn = props.setIsLoggedIn;
	const [formData, setFormData] = useState({email:"", password:""})
const[showPass,setShowPass] = useState(false);
	function ChangeHandler(event){
		setFormData((prevData)=>(
			{
				...prevData,
				[event.target.name]:event.target.value
			}
		))
	}

	let submitHandler = (event) => {
		event.preventDefault();
		setIsLoggedIn(true);
		toast.success("Logged In");
		const accountData = {
			...formData
		};

	console.log("printing account data ");
	console.log(accountData);
		navigate("/dashboard");
	  };
	return(
		<form onSubmit={submitHandler} className="relative flex flex-col w-full gap-y-4 mt-6 " >

			<label htmlFor="email" className="w-full ">
				<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
				Email Address<sup className="text-pink-200">*</sup>
				</p>
			</label>

		<input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
		required value={formData.email}
		 type="text" name="email"
		 id="email"
		 onChange={ChangeHandler}
		  placeholder="Enter email address"/>

			<label htmlFor="password" className="w-full">
				<p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
				Password<sup className="text-pink-200">*</sup>
				</p>
			</label>

		<input required value={formData.password}
		 type={showPass?("text"):("password")} name="password"
		 onChange={ChangeHandler}
		 id="password"
		  placeholder="Enter Password"
		  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"/>

		  <span className="absolute text-white cursor-pointer right-4 bottom-[105px]" onClick={()=> setShowPass((prev) => !prev)}>
			{showPass?(<FaEye fontSize={24} fill="#AFB2BF" />):(<FaEyeSlash fontSize={24} fill="#AFB2BF"/>)}
			</span>
		<Link to="#">
			<p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
				Forget Password
			</p>
		</Link>

		<button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Sign In</button>
		</form>
	);
}