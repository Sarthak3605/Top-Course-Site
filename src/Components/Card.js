import React from "react";
import {FcLike} from "react-icons/fc";
import {FcLikePlaceholder} from "react-icons/fc"

import { toast } from 'react-hot-toast';



const Card = (props) =>{
	let course = props.course;
 let likedCourses = props.likedCourses;
 let setLikedCourses =  props.setLikedCourses;

let ToggleLike = ()=>{

   if(likedCourses.includes(course.id)) {
	setLikedCourses((prev) => prev.filter( (cid)=> (cid != course.id)))
	toast.error("like removed");
   }
   else{
	   if(likedCourses.length === 0){
setLikedCourses([course.id]);
	   }
	   else{
                setLikedCourses((prev) => [...prev,course.id]);
	   }
	   toast.success("liked");
   }

}


    return(
    <div className="w-[300px] h-[370px] bg-slate-50 bg-opacity-50 rounded-md overflow-hidden">

         <div className="realtive">
            <img src={course.image.url} />
            </div>

            <div >
			<div className="w-[40px] h-[40px] bg-white rounded-full ml-[250px]  -mt-5  grid place-content-center ">
          <button onClick={ToggleLike} className="bg-white w-[40px] h-[40px]   rounded-full grid place-content-center">
          {
         likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
}
          </button>
		  </div>
          <div className="p-4 w-[300px] ">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white">{

			course.description.length > 100 ?
			(course.description.substr(0,100)+"..."):
			(course.description)

			}</p>
            </div>
</div>
         </div>
    )
}
export default Card;