import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const[likedCourses , setLikedCourses] = useState([]);

    console.log("printing data");
    //console.log(courses);

    function getCourses() {

        if(category === "All") {

        let allCourses = [];

        Object.values(courses).forEach( array => {
            array.forEach( courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }

        else {
            // specific category ka data
            return courses[category];
        }
        
    }

    return (
        <div>
            {
                getCourses().map( (course) => {
                    return (
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                    );
                })
            }
        </div>
    );
}

/*
const Cards = ({courses}) => {

    let allCourses = [];

    // return a list of allcourses received from api response
    const getCourses = () => {
        console.log("printing courses");
        console.log(courses);
        
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourses.push(course);
            })
        })
        
        return allCourses;
    }

    return(
        <div>
        {
            getCourses().map( (course) => {
                return(
                    <Card key={course.id} course={course}/>
                );
            })
        }
        </div>
    );
}
*/
export default Cards;