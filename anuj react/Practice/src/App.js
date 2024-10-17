//import { useState } from "react";
import "./App.css";
import MyButton from "./component/button";
import Lists from "./component/list";
import Profile from "./component/profile";
import UnLists from "./component/unlist";
import SurfLists from "./component/surflist";
import ItemDate from "./component/itemdate";
import PackingList from "./component/packinglist";
import PeopleList from "./component/peoplelist";
//import cup from "./component/cup";
import TeaList from "./component/tealist";

function App() {

  const info = {
    id:'01',
    name:"sher",
};

  const person = {
    nam:"Anuj",
    theme:{
      backgroundColor:"black",
      color:'yellow'
    }
  };

/*
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
*/

const response = [
  {
     itemName:"Nirma",
     itemDate:"01",
     itemMonth:"Jan",
     itemYear:"2024"
  },
]

  return(
    <div>
        <div>hello ji</div>
        <h1>{info.name}</h1>
        <h1 style={person.theme}> {person.nam} sher</h1>
        <MyButton/>
        <Lists/>
        <Profile/>
        <UnLists/>
        <SurfLists name={response[0].itemName}/>
        <ItemDate date={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>

        <section>
          <h2>New List</h2>
          <ul>
            <PackingList isPacked={true} name="deshi chora"/>
            <PackingList isPacked={false} name="galat insaan"/>
            <PackingList isPacked={true} name="bahut badiya"/>
          </ul>
        </section>

        <PeopleList/>
        <TeaList/>

    </div>
  );
}

export default App;
