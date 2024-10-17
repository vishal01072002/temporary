import { useState } from 'react';
import './App.css';

const App = () => {

  /*
  const[firstName , setFirstName] = useState('');
  const[lastName , setLastName] = useState('');

  console.log(firstName);
  console.log(lastName);

  function changeFirstNameHandler(event) {
    console.log("printing first name");
    //console.log(event.target.value);
    //console.log(event.target);
    setFirstName(event.target.value);
  }

  function changeLastNameHandler(event) {
    console.log("printing last name");
    //console.log(event.target);
    setLastName(event.target.value);
  }
  */

  const [formData , setFormData] = useState( { firstName : "" , lastName : "" ,email : "" , comments : "" , isVisible : true , mode : "" , favCar : "" });

  //console.log(formData);

  function changeHandler (event) {
    // find all values by de structring 
    const {name , value , checked , type} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
       // [event.target.name] : event.target.value
        [name] : type ==="checkbox" ? checked : value 
      }
    });
  }

  function submitHandler (event) {
    event.preventDefault();
    console.log("finally printing ........");
    console.log(formData);
  }

  return(

    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
        type='text'
        placeholder='first name'
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        />
        
        <br/>
        <br/>

        <input 
        type='text'
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}>
        </input>

        <br/>
        <br/>

        <input
          type='email' 
          placeholder="Enter Your email"
          onChange={changeHandler}
          name = "email"
          value={formData.email}
        />

        <br/>
        <br/>

        <textarea
          placeholder='Enter your comments'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/>
        <br/>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>
          Am I Visible
        </label>

        <br/>
        <br/>

        <fieldset>
          <legend>Mode:</legend>

          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode === "Online-Mode" }
        />
        <label htmlFor='Online-Mode'>
          Online Mode
        </label>

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id='Offine-Mode'
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor='Offline-Mode'>
          Offline Mode
        </label>

        </fieldset>
        
        <br/>
        <br/>

        <label htmlFor='favCar'>Tell me your favourite car</label>
        <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}>

        <option value="ferrari" >ferrari</option>
        <option value="thar" >thar</option>
        <option value="scorpio" >scorpio</option>

        </select>

        <br/>
        <br/>
        <button>Submit</button>

        {/*<input type='submit' value="submit"/>*/}

      </form>
    </div>

  );
}

export default App ;