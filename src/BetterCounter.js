import {useState} from "react";
function BetterCounter(){
    let [count,setCount] = useState(0);
    
    function increase(){
        setCount(count +1)
    }
    function decrease(){
        setCount(count -1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            count ={count}
            <br/>
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
}
export default BetterCounter;