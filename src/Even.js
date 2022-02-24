import { useState } from "react";
function Even() {
    let [even, setEven] = useState("")
    function checkEven(event) {
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.number;
        if((inputTag.value) % 2 == 0){
            setEven(" Even")
        }
        else{
            setEven("not Even")
        }
    }
    return (
        <div>
            <h1>The Given Number is {even}</h1>
            <form onSubmit={checkEven}>
                <input type="number" name="number" placeholder="Enter a Number"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Even;