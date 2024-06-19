import React from "react";
import logo from "../assets/Untitled Project (4).jpg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props)=> {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/" >
        <img src={logo} alt="LOGO" width={100} loading="lazy" />
      </Link>
      <nav >
        <ul className="flex gap-x-6 text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex mr-3 gap-3">
        {
		!isLoggedIn &&
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
          </Link>

		}
        {!isLoggedIn &&
          <Link to="/signup">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" >
              Sign up
            </button>
          </Link>
        }

        {isLoggedIn &&
          <Link to="/">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              LogOut
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}
export default Navbar