import React, {useState} from 'react';
import "./App.css";
import Inputs from './Components/Inputs';
import Items from './Components/Items';

function App() {

  const [inputs, setInputs] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInputs(val)
  }

  const itemList = () => {
    if(inputs.length > 0){
      setItems((prevItems) => {
        return [...prevItems, inputs];
      });
      setInputs("");
    }
  }

  const deleteItem = (id) => {
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <Inputs 
      change={handleChange} 
      v={inputs}
      />
      <button className="btn" onClick={itemList}>Add</button>
      <div className="item-container">
      <ol >
        {items.map((item, index) => {
          return (
              <Items 
              key={index} 
              id={index} 
              text={item} 
              onCheck={deleteItem}/>
          );
        })}
      </ol>
      </div>
    </div>
  );
}

export default App;
