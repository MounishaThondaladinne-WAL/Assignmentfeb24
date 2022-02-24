import PropTypes from "prop-types";
function AddNos(props){
    return(<div className="AddNos">
    <h1>Addition of two numbers is: {props.Num1+props.Num2}</h1>
    <p>  Number1 = {props.Num1}</p>
    <p> Number2 = {props.Num2}</p>
    </div>
    );
}
AddNos.propTypes={
    Num1: PropTypes.number,
    Num2: PropTypes.number,
}
export default AddNos;