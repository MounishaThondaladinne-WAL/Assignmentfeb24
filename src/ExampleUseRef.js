import { useRef } from "react";
const ExampleUseRef =()=>{
    const refDefaultValue = null;
    const inputRef = useRef(refDefaultValue);
    const showInputDomObject =()=>{
    console.log(inputRef.current);
    alert(inputRef.current.value)
}
return (
    <div>
    <h1>I am Heading</h1>
    <input ref={inputRef} type="text" name="firstname" />
    <button onClick={showInputDomObject}>Show Input</button>
</div>
)
}
export default ExampleUseRef;

