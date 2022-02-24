import { useRef,useState} from "react";
const TodoRef =()=>{
    let [todo,setTodo] = useState([])
    const refDefaultValue = null;
    const nameRef = useRef(refDefaultValue);
    const statusRef = useRef(refDefaultValue);
    const showInputDomObject =()=>{
    console.log(nameRef.current);
    alert(nameRef.current.value)
    console.log(statusRef.current)
    alert(statusRef.current.value)
    let todoObj = {
        name:nameRef.current.value,
        status:statusRef.current.value
    }
    setTodo([...todo,todoObj])
}
return (
    <div>
    <h1>Todo List</h1>
    <input ref={nameRef} type="text" placeholder="Enter a todo item" />
    <select ref={statusRef}>
        <option>Completed</option>
        <option>In complete</option>
    </select>
    <button onClick={showInputDomObject}>Show Input</button>
    {
        todo.map((val,index)=>{
            return(
                <tr>
                    <td>Todo : {val.name}</td>
                    <td>Status : {val.status}</td>
                </tr>
            )
        })
    }
</div>
)
}
export default TodoRef;

