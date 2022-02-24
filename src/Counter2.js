import {useState} from "react";
function Counter2(){
    let [count,setCount] = useState(0);
    
    function increase(){
        setCount(count +2)
    }
    function decrease(){
        setCount(count -2)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            <h1 className="Menu-heading">Count : {count}</h1>
            <br/>
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
}
export default Counter2;