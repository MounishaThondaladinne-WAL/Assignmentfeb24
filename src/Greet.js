import PropTypes from "prop-types";
function Greet(props){
    return(<div className="Greet">{props.message}
    <h1>{props.date}</h1>
    <h1>No = {props.no}</h1>
    </div>
    );
}
Greet.propTypes={
    no : PropTypes.number,
    date: PropTypes.string,
    message: PropTypes.string,
}
export default Greet;