import React, { useState } from "react";
import Card from './Card';
const Course = (props) => {
    // Ensure props.courses is defined and not null/undefined
    const courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);

let catog = props.catog;


    function getCourses(){
if(catog === 'All'){

        let allCourses = [];
        // Iterate over the values of courses object
        Object.values(courses).forEach(element => { element.forEach(courseData => {
                    allCourses.push(courseData);})
                })


        return allCourses;
			}else{
				return courses[catog];
			}
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                // Use getCourses function to render Card components
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    );
}

export default Course;