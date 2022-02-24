import { useEffect , useState } from "react"

let LearnUseEffect=()=>{
    let [no,setNo] = useState(0)
    useEffect(()=>{
        alert("component Loaded");
        let removeComponent=()=>{
            alert("Component Removed");
        }
        return removeComponent;
    },[]);
    useEffect(()=>{
        console.log(`the value is ${no}`)
    },[no])
    return(
        <div>Exapmle for Use Effect<br/>
        No value=<strong>{no}</strong>
        <input type="number"
        value={no}
        onInput={(event)=>setNo(event.target.value)}/></div>
    )
}
export default LearnUseEffect;