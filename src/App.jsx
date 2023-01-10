
import './App.css'
import Drinks from './components/Drinks'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const[dataDrinks, setDataDrinks] = useState ([]);

  const[drinks,setDrink]= useState("");
  
  useEffect (()=>{
    getData()
    },[drinks]);

    const searchDrink= (e)=>{
      e.preventDefault()
      setDrink(e.target[0].value.toLowerCase())
      };

    const getData =()=>{
      axios 
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
      .then((resp) => {
        console.log(resp?.data.drinks);
        setDataDrinks(resp?.data.drinks);
      })
      .catch((error) => {     
      console.error(error);
       ([]);
    });
  };
  return (
    <div className="App">
      <form className="Searcher" onSubmit={(e)=>searchDrink(e)}>
        <input type="text" placeholder='Buscar por nombre'/> 
        <button type='submit'>
          <i className="fa-solid fa-martini-glass-empty"></i>
        </button>
      </form>

      <div className="Style">  
        {dataDrinks ? 
          dataDrinks.map((drinky, index) => 
          <Drinks key={`drinky-${index}`} data={drinky}/>)
          : 
          <h1 className="Text">¡No hay coincidencias!
          <img src="/public/imag.jpg" alt=""/>
          </h1>
        }    
      </div>
    </div>
  );  
}
export default App;
