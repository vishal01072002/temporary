import React from "react";
import reviews from "./data";
import Testemonial from "./component/Testemonial";

const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

      <div className="text-center">

        <h1>Our Testemonial</h1>

        <div className="m-2 h-1 w-full bg-blue-400 mx-auto"></div>

        <Testemonial reviews={reviews}/>

      </div>
      
    </div>
  )
};

export default App;
