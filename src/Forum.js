import PropTypes from "prop-types";
import { useState } from "react";
function Forum(props) {
    let [reply, setReply] = useState([{ author: "AuthorName" }, { Replies: "Reply" }])
    let addReplies = (event) => {
        event.preventDefault()
        let replyObject = { Replies: event.target.replies.value, author: event.target.author.value }
        let newReply = [...reply, replyObject]
        setReply(newReply)
    }
    return (
        <div className="Forum">
            <h1>Main Topic is : {props.Topic}</h1>
            <form className="comment-Form" onSubmit={addReplies}>
                <input type="text" name="author" placeholder="Author Name" className="form-elements" />
                <textarea name="replies" placeholder="Enter ur Reply" className="form-elements Comment-Body"></textarea>
                <button className="form-elements Button">Submit</button>
            </form>
            <table className="Table">
                <tr>
                    <td className="Table-elements">Author</td>
                    <td className="Table-elements">Reply</td>
                </tr>
                {reply.map((val, index) => {
                    if (index > 1) {
                        return (
                            <tr>
                                <td className="Table-elements">{val.author}</td>
                                <td className="Table-elements">{val.Replies}</td>
                            </tr>
                        )
                    }
                })}
            </table>
        </div>
    )
}


Forum.propTypes = {

    Topic: PropTypes.string,
}
export default Forum;