import "./App.css";
import Item from './components/Item';
import NewProduct from "./components/NewProduct";
//import products from './components/Products';

function App() {

  const response = [
    {
      itemName:"Nirma"
    },
    {
      itemName:"Surfexcel"
    },
  ];

  return (
    <div>
    
      <NewProduct/>

      <Item name={response[0].itemName} > kaise hai </Item>
      <div>Hello</div>
      <Item name={response[1].itemName} > kaise hai </Item>

    
    </div>
  );
}

export default App;
