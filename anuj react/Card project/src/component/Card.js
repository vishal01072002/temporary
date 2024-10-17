import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    //console.log("hello");
    //console.log(course);
    
    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            // already liked

            setLikedCourses( (prev) => prev.filter((cid)=> (cid !=course.id) ));
            toast.warning("liked removed");
        }

        else {
            // when not already liked this course
            // do insert this course in liked courses
            if(likedCourses.length == 0) {
                setLikedCourses([course.id]);
            }

            // when non empty
            else {
                setLikedCourses((prev) => [...prev , course.id]);
            }
            toast.success("liked succesfully");
        }
    }

    return(
        <div>
            <div>
                <Card key={course.id} course={course}/>

                <div>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{
                    (course.description.length > 100) ? (course.description.substr(0,100)) + "..." : (course.description) 
                }
                </p>
            </div>
        </div>
    );
}

export default Card;