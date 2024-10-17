import React from "react";
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa' ;

const Card = (props) => {

    let review = props.review;

    return (
        <div className="flex flex-col md:relative">
            <div className="absolute mx-auto top-[-7rem]">
                <img className="aspect-square rounded-full h-[140px] w-[140px] z-[20]"
                src={review.image}/>
                <div className="absolute rounded-full bg-violet-500 h-[140px] w-[140px] z-[10] top-[-6px] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div className="text-violet mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-slate-400 text-center">
                {review.text}
            </div>

            <div className="text-violet mx-auto mt-5">
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;