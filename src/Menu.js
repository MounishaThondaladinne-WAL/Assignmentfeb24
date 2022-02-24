import { useState } from "react";
function Menu(){
    let [item,setItem] = useState([{items:""}])
    const addItem = (event)=>{
        event.preventDefault();
        let itemObject = {
            items: event.target.items.value,
        }
        let newItem= [...item,itemObject]
        setItem(newItem)
    }
    return(
        <div className="Comment">
            <h1>Menu</h1>
            <form onSubmit={addItem} className="comment-Form">
            <input type="text" name="items" placeholder="Mention item" className="form-elements"/>
            <button className="form-elements Button">Add Item</button> 
            </form>
            <div>
                <h1>Menu Items</h1>
            {item.map((val,index)=>{
                if(index>0){return(
                <div className="Display-Comments">
                    <h3>Item {index}</h3>
                    <p className="para">{index}: {val.items}</p>
                </div>)}
               
            })}
             </div>
        </div>
    )

}
export default Menu;