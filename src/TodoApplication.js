import { useState, useEffect } from "react";
import axios from "axios";
const TodoApplication = ()=>{
    let [todo , setTodo] = useState(["Default Product"])
    useEffect(()=>{
        axios.get("https://gorest.co.in/public/v2/todos").then((res)=>{
            console.log(res.data)
            setTodo(res.data)
        })
    })
    return(
        <div className="AllTodo">
            <h1 className="Todo-heading">Todo List</h1>
            <table>
            <tr>
                <th class="table-Id">ID</th>
                <th class="table_UserId">User_id</th> 
                 <th class="table_title">Title</th>
                 <th class="table_dueon">due_on</th>
                <th class="table_status">Status</th>
             </tr>
            {todo.map((val,index)=>{
                return( 
                   <tr>
                       <td class="table-Id">{val.id}</td>
                       <td class="table_UserId">{val.user_id}</td>
                       <td class="table_title">{val.title}</td>
                       <td class="table_dueon">{val.due_on}</td>
                       <td class="table_status">{val.status}</td>
                    </tr>
                )
                
            })}
          </table>
        </div>
    )
}

export default TodoApplication;