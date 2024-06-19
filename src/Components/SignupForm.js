import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupForm(props) {
	const navigate = useNavigate();
  let setIsLoggedIn = props.setIsLoggedIn;
  const [accType, setAccType] = useState("student");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let submitHandler = (event) => {
    event.preventDefault();
	if(formData.password !== formData.confirmPassword){
		toast.error("Password do not match");
		return;
	}
    setIsLoggedIn(true);
    toast.success("Account Created");
	const accountData = {
		...formData
	};
	const finalData = {
		...accountData,
		accType
	}
console.log(finalData);

    navigate("/");
  };

  function ChangeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-2 gap-x-2 my-6 rounded-full max-w-max text-richblack-100 ">
        <button
          className={`${
            accType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-1 px-4 rounded-full transition-all duration-500`}
          onClick={() => setAccType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-1 px-4 rounded-full transition-all duration-500`}
          onClick={() => setAccType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="relative flex flex-col w-full gap-y-4 mt-3"
      >
        <div className="flex gap-x-4 justify-between">
          <label htmlFor="fname" className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
              value={formData.firstName}
              type="text"
              onChange={ChangeHandler}
              required
              name="firstName"
              placeholder="Enter first name"
            />
          </label>
          <label htmlFor="lname" className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
              value={formData.lastName}
              type="text"
              onChange={ChangeHandler}
              required
              name="lastName"
              placeholder="Enter last name"
            />
          </label>
        </div>
        <label htmlFor="email" className="w-full ">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
        </label>
        <input
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
          value={formData.email}
          type="text"
          onChange={ChangeHandler}
          required
          name="email"
          placeholder="Enter email address"
        />

        <div className="flex gap-x-4 justify-between">
          <label htmlFor="password" className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
              required
              value={formData.password}
              type={showPass ? "text" : "password"}
              name="password"
              onChange={ChangeHandler}
              placeholder="Enter Password"
            />
          </label>
          <span
            className="absolute text-white cursor-pointer left-[180px] bottom-[68px]"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? (
              <FaEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <FaEyeSlash fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <label htmlFor="confirmpassword" className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-semibold">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm shadow-white"
              required
              value={formData.confirmPassword}
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              onChange={ChangeHandler}
              placeholder="Confirm Password"
            />
          </label>
          <span
            className="absolute text-white cursor-pointer right-4 bottom-[67px]"
            onClick={() => setShowConfirmPass((prev) => !prev)}
          >
            {showConfirmPass ? (
              <FaEye fontSize={24} fill="#AFB2BF" />
            ) : (
              <FaEyeSlash fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
         Create Account
        </button>
      </form>
    </div>
  );
}
