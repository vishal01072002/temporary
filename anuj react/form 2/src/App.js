import {useState} from 'react';

const App = () => {

  const[FormData , setFormData] = useState( { firstName : "" , lastName : "" , country : "" , comments : false})

  function changeHandler (event) {

    const {name,value,checked,type} = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type ==="checkbox" ? checked : value
      }
    });
  }


  return(
    <div>
      <form>
        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input
          type='text'
          placeholder='first name'
          id="firstName"
          onchange={changeHandler}
          name="firstName"
          value={FormData.firstName}
        />

        <br/>
        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input
          type='text'
          placeholder='last Name'
          id='lastName'
          name='lastName'
          onchange={changeHandler}
          value={FormData.lastName}
        />

        <br/>
        <select 
          id='country'
          name='country'
          value={FormData.country}
          onChange={changeHandler}
          >
            <option>India</option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>United State</option>
          </select>

        <br/>

        <fieldset>
          <legend>By Email</legend>

          <div>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              checked={FormData.comments}
              onchange={changeHandler}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>get notified me</p>
            </div>
          </div>
        </fieldset>

        <br/>
        <fieldset>
          
        </fieldset>
      </form>
    </div>
  );
}

export default App;