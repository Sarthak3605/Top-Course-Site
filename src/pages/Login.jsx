import React from "react";
import Templete from "../Components/Templete"
import loginImg from "../assets/login.png"
export default function Login({setIsLoggedIn}){
	return(
		<Templete
		title="Welcome Back"
		desc1= "Build skills for today, tomorrowm and beyond."
	desc2="Education is future-proof your career"
	image={loginImg}
	formtype = "login"
	setIsLoggedIn = {setIsLoggedIn}
		/>
	);
}