import React, { useState } from "react";
import { useEffect } from "react";

function App() {

  const[text,setText] = useState('');
  const[name,setName] =useState('love');

  // variation 1 => every render
  /*
  useEffect( () => {
      console.log("UI Rendering done");
  });
  */

  // variation 2 => first render
  /*
  useEffect( () => {
    console.log("UI Rendering done");
  },[]);
  */

  // variation 3 => on first render + whenever dependency change
  /*
  useEffect( () => {
    console.log("Change observed");
  },[name]);
*/

  // variation 4 => to handling unmounting---> DOM se remove karna of a component 
  useEffect( () => {

    console.log("Listener added");

    return() => {
      console.log("Listener remove");
    }
  },[text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }
  
  return(
    <div>
      <div>hello</div>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
