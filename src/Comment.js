import { useState } from "react";
function Comment(){
    let [comment,setComment] = useState([{title:"",description:"",author:"",date:""}])
    const addComment = (event)=>{
        event.preventDefault();
        let commentObject = {
            title : event.target.title.value,
            description : event.target.description.value,
            author : event.target.author.value,
            date: event.target.date.value,
        }
        let newComment= [...comment,commentObject]
        setComment(newComment)
    }
    let deleteComment =(valuetodelete)=>{  
        let newComment = comment.filter(function(val){
            if(valuetodelete==val){
                return false;
            }
            return true;
        });
        setComment(newComment)
    }
    return(
        <div className="Comment">
            <h1>Give ur Comments</h1>
            <form onSubmit={addComment} className="comment-Form">
            <input type="text" name="title" placeholder="Comment Title" className="form-elements"/>
            <textarea name="description" placeholder="Comment Body" className="form-elements Comment-Body"></textarea>
            <input type="text" name="author" placeholder="Author Name" className="form-elements"/>
            <input type="date" name="date" className="form-elements"/>
            <button className="form-elements Button">Submit</button> 
            </form>
            <div>
                <h1>All Comments</h1>
            {comment.map((val,index)=>{
                if(index>0){return(
                <div className="Display-Comments">
                    <h3>Comment {index}</h3>
                    <p className="para">Title : {val.title}</p>
                    <p className="para">Description : {val.description}</p>
                    <p className="para">Author : {val.author}</p>
                    <p className="para">Date : {val.date}</p>
                    <button className="Button" onClick={()=>{deleteComment(val)}}>Delete Comment</button>
                </div>)}
               
            })}
             </div>
        </div>
    )

}
export default Comment;