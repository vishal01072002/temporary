import "./App.css";
import {useState} from React;


function App() {

  //count = 0;

  const[count , setCount] = useState(0);

  function decreaseHandler() {
    setCount(count-1);
  }

  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }
  return(
    <div>
      <div>Increment && Decrement</div>
      <div>
        <button onClick={decreaseHandler}>-</button>
        <div>{count}</div>
        <button onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler}>reset</button>
    </div>
  );

}

export default App;