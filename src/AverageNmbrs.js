import { useState } from "react";
function AvgNmbrs() {
    let [nmbrarr, setnmbr] = useState([]);
    let [Avg, setAvg] = useState(0)
    function AddNmbr(event) {
        event.preventDefault();
        let formTag = event.target
        let inputTag = formTag.numbr
        let addNmbrarr = [...nmbrarr, inputTag.value]
        setnmbr(addNmbrarr)
    }
    function Average() {
        let sum = 0;
        alert(nmbrarr)
        nmbrarr.map(function (val) {
            sum += Number(val)
        })
        setAvg(Math.floor(sum / nmbrarr.length))
    }
    return (
        <div className="Average">

            <h1 className="Average-Heading">Average of numbers</h1>
            <div id="showaverage"><h1>Average : {Avg} </h1></div>
            <p>The Numbers are :</p>
            {nmbrarr.map(function (val) {
                return (
                    <div className="Number">{val},</div>
                )
            })}
            <form onSubmit={AddNmbr}>
                <input type="number" name="numbr" placeholder="Enter a Number" className="form-Elements" />
                <button className="form-Elements">Add New Number</button>
            </form>
            <button onClick={Average} className="form-Elements">Average</button>

        </div>
    );
}
export default AvgNmbrs;
