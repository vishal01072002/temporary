import { useState } from "react";

function MyButton()
{
    const[count,setCount] = useState(0);

    function clickHandler() {

        setCount(count+1);

        //return(
        //    console.log("clicked")
        //);
    }
    return(
        <button count={count} onClick={clickHandler}>Click Me {count} times</button>
    );
}

export default MyButton;