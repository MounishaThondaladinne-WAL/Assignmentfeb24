import './App.css';
import { useState } from "react";
import Greet from "./Greet"
import LearnUseEffect2 from './LearnUseEffect2';
import LearnUseEffect from './LearnUseEffect';
import FindCountry from './FindCountry';
import FindGender from './FindGender';
function App() {
  let [msg,setMsg] = useState("intial message");
  let [date,setDate] = useState(null);
  let [no,setNo] = useState(0)
  let [showGreet,setShowGreet] = useState(false);
  return (
    <div className="App">
      {/*<FindCountry></FindCountry>*/}
      <FindGender></FindGender>
     { showGreet ? <LearnUseEffect2></LearnUseEffect2> : ""}
    <h1>Welcome to react</h1>
    <input type="text" name={msg} onInput={(event)=>{setMsg(event.target.value)}}/>
    <input type="date" name={date} onInput={(event)=>{setDate(event.target.value)}}/>
    <input type="number" name={no} onInput={(event)=>{setNo(event.target.value)}}/>
    <select onChange={(event)=>{let showGreetValue = event.target.value === 'true';
    setShowGreet(showGreetValue)}}>
      <option value={true}>Show</option>
      <option value={false}>Hide</option>
    </select>
  {/*showGreet ? <Greet message={msg} date={date} no={no}></Greet> : ""*/}
  <Product id = {1} ></Product>
  <Product id={1}></Product>
      <AllProduct></AllProduct>
   </div>
  
  );
}

export default App;
