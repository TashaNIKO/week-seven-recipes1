import { useEffect } from 'react';
import './App.css';


function App() {
 const MY_ID = "7af5dec9";
 const MY_KEY = "3a1e99950cf10f3f11a453e760f56c89";

 useEffect(async () => {
 
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
console.log(data.hits);
}) 

  return (
    <div className="App">
     <p>RECIPES</p>
    </div>
  );
 } 

export default App;
