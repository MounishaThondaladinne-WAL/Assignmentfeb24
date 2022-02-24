import { useState } from "react";

function Hobby(){
    let [hobby,setHobby] = useState("Initial Hobby");
let[city,setCity] = useState("Intial City");
    function addHobby(event){
    event.preventDefault();
    console.log(event);
    let formTag = event.target;
    let inputTag = formTag.hobby;
    let inputTagCity = formTag.city;
    console.log(formTag);
    console.log(inputTag);
    console.log(inputTagCity);
    setHobby(inputTag.value);
    setCity(inputTagCity.value);
}
return (
    <div>
        Hobby = {hobby} & City  = {city};
        <br/>
        <form onSubmit = {addHobby}>
            <input type="text" name="hobby"/>
            <input type ="text" name="city"/>
            <button>Add Hobby</button>
        </form>
    </div>
)
}
export default Hobby;
