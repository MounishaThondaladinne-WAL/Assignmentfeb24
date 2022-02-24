import {useState} from "react";
function Author(){
    let [name,setName]=useState("");
    let [title,setTitle]=useState("");
    let [body,setBody]=useState("")
    function addDetails(event){
        event.preventDefault();
        let formTag=event.target;
        let inputTag=formTag.name;
        let inputTagName=formTag.title;
        let inputTagBody=formTag.body;
        setName(inputTag.value);
        setTitle(inputTagName.value);
        setBody(inputTagBody.value)
    }
    return(
        <div>
            AuthorName={name}<br/>
            ComponentTitle={title}<br/>
            ComponentBody={body}
            <form onSubmit={addDetails}>
                <input type="text" name="name" placeholder="Author Name"/><br/>
                <input type="text" name="title" placeholder="Component Title"/><br/>
                <textarea type="text" name="body" placeholder="Component Body"></textarea><br/>
                <button>Get Details</button>
            </form>
        </div>
    )


}
export default Author;