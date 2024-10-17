import "./App.css";
import Card from './components/card';
import Item from './components/Item';
import Itemdate from './components/Itemdate';


function App() {
   const response = [
      {
         itemName:"Nirma",
         itemDate:"01",
         itemMonth:"Jan",
         itemYear:"2024"
      },
      {
         itemName:"Nirma2",
         itemDate:"02",
         itemMonth:"Feb",
         itemYear:"2025"
      },
      {
         itemName:"Nirma3",
         itemDate:"03",
         itemMonth:"Mar",
         itemYear:"2026"
      }
   ];
   const itemTwoName = "SurfExcel";
  return (
     <div> 

     <Card>
         <Item name={response[0].itemName}>
         hello jee kaise ho.
        </Item>
        <Itemdate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Itemdate>

        <Item name={itemTwoName}></Item>
        <Itemdate day="02" month="feb" year="2024"></Itemdate>

        <Item name={response[2].itemName}></Item>
        <Itemdate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Itemdate>


        <div className="App"> hello jee </div>
     </Card>
        
     </div>
  );
}

export default App;
