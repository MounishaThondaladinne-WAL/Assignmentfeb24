import { useState } from "react";

function Hobbies2() {
    let [hobby, setHobby] = useState(["Initial Hobby", "hobby1", "hobby2", "hobby3"]);
    function addHobby(event) {
        event.preventDefault();
        console.log(event);
        let formTag = event.target;
        let inputTag = formTag.hobby;
        console.log(formTag);
        console.log(inputTag);
        let newHobby = [...hobby,inputTag.value];
        setHobby(newHobby);
    }
    function removeAll(){
        setHobby([]);
    }
    return (
        <div>
            <form onSubmit={addHobby}>
                <input type="text" name="hobby" className="" />
                <button>Add Hobby</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
            {hobby.map(function(val,index){
                return <div>{val}</div>
            })}
        </div>
    )
}
export default Hobbies2;
