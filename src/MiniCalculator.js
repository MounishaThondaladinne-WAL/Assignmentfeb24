import PropTypes from "prop-types";
function MiniCalc(props){
    if(props.Operation == "Addition"){
        return (<div className="AddNos">
            <h1>MiniCalculator</h1>
            <h4>Num 1: {props.no1}</h4>
            <h4>Num 2 : {props.no2}</h4>
            <h4>Sum of Two nums is {props.no1 + props.no2}</h4>
        </div>);
    }
    else if(props.Operation == "Multiply"){
        return (<div className="AddNos">
            <h1>MiniCalculator</h1>
            <h4>Num 1: {props.no1}</h4>
            <h4>Num 2: {props.no2}</h4>
            <h4>Multiplication of Two nums is { props.no1 * props.no2}</h4>
            
        </div>);
    }
    else if(props.Operation == "Subtraction"){
        return (<div className="AddNos">
            <h1>MiniCalculator</h1>
            <h4>Num 1:{props.no1}</h4>
            <h4>Num 2:{props.no2}</h4>
            <h4>Difference of Two nums is {props.no1 - props.no2}</h4>
        </div>);
    }
    else if(props.Operation == "Division"){
        return( <div className="AddNos">
            <h1>MiniCalculator</h1>
            <h4>Num 1: {props.no1}</h4>
            <h4>Num 2: {props.no2}</h4>
            <h4>Division of Two nums is {props.no1 / props.no2}</h4>  
        </div>);
    }  
        
}

MiniCalc.propTypes={
    no1:PropTypes.number,
    no2:PropTypes.number,
    Operation:PropTypes.string   
}
export default MiniCalc;