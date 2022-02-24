import { useState } from "react";
function Todo() {
    let [todoList, setTodoitem] = useState([]);
    function Additem(event) {
        event.preventDefault();
        let formTag = event.target
        let inputTag = formTag.todo
        let newTodo = [...todoList, inputTag.value]
        setTodoitem(newTodo)
    }
    function Remove() {
        setTodoitem([]);
    }
    return (
        <div className="Todo-App">

            <h1 className="Todo-Heading">Manger your Tasks</h1>
            {todoList.map(function (val) {
                return (
                    <div className="Todo-item">{val}</div>
                )
            })}
            <form onSubmit={Additem}>
                <input type="text" name="todo" placeholder="Enter a Todo item" className="form-Elements" />
                <button className="form-Elements">Add To do Item</button>
            </form>

            <button onClick={Remove} className="form-Elements">Remove All</button>
        </div>
    );
}
export default Todo;
