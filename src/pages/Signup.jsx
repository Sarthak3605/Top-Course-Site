import React from "react";
import Templete from "../Components/Templete"
import signupImg from "../assets/signup.png"
export default function Signup({setIsLoggedIn}){
	return(
		<Templete
		title="Join the millions learner to code on our platform for free"
		desc1= "Build skills for today, tomorrowm and beyond."
	desc2="Education is future-proof your career"
	image={signupImg}
	formtype = "signup"
	setIsLoggedIn = {setIsLoggedIn}
		/>
	);
}
