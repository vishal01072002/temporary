import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi' ;
//import reviews from "../data";
// (n-1) = (reviews.length - 1)
//reviews.map( (review) => (<Card review = {review}></Card>));
//reviews.map( (review) => {return (<Card review = {review}></Card>) });

const Testemonial = (props) => {

    let reviews = props.reviews;
    const[index , setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }

        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= reviews.length) {
            setIndex(0);
        }

        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="flex flex-col justify-center items-center w-[85vw] md:w-[700px] ">
        
            <Card review = {reviews[0]}/>

            <div>
                <button onClick={leftShiftHandler}>
                    <FiChevronLeft/>
                </button>

                <button onClick={rightShiftHandler}>
                    <FiChevronRight/>  
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler} 
                className="bg-violet-400 hover:bg-violet-500  transition-all duration-200 cursor-pointer rounded-md font-bold m-3 p-1 text-white text-lg px-3 " 
                >Surprise me</button>
            </div>
        </div>
    );
}

export default Testemonial;