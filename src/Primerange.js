import { useState } from "react";
function Primerange() {
    let [primeNmbrs, setNmbr] = useState("");
    function Primesrange(event) {
        event.preventDefault();
        let formTag = event.target;
        let minVal= parseInt(formTag.Numbr1.value);
        let maxVal = parseInt(formTag.Numbr2.value)
        let nmbrs= "";
        let y=0;
        for (let i = minVal; i <= maxVal; i++) {
            let flag= 0;
            
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    flag= 1;
                    break;
                }
            }
            if (flag== 0) {
                nmbrs +=  i + ", "
            }

        }
        setNmbr(nmbrs);
    }
    return (
        <div>
            <h1>Prime Numbers</h1>
            <form onSubmit={Primesrange}>
                <input type="number" name="Numbr1" placeholder=" Enter Min Val" /><br/>
                <input type="number" name="Numbr2" placeholder=" Enter Max Val" /><br/>
                <button>Submit</button>
            </form>
            <div><h3>Prime Numbers in range are: {primeNmbrs}</h3></div>
        </div>
    )
}
export default Primerange;