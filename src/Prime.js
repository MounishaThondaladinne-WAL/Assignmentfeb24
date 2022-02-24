
function Prime() {
    function checkPrime(event) {
        event.preventDefault();
        let formTag = event.target;
        let minValue = formTag.min;
    let maxValue = formTag.max;
        let inputTag = formTag.number;
        let primeArr = [];
        for(let i=parseInt(minValue.value);i<=parseInt(maxValue.value);i++){
            if(isPrime(i)){
                primeArr.push(i);
            }
        }
        alert(primeArr)
        function isPrime(n){
            let a =0;
            for(let j=1;j<n;j++){
                if(n%j==0){
                    a+=1
                }
            }
            if(a==1){
                return true;
            }
            else{
                return false;
            }
        }
    }
    return (
        <div>
            <form onSubmit={checkPrime}>
                <input type="number" name="number" placeholder="Enter a Min Number"/>
                <input type="number" name="number" placeholder="Enter a Max Number"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Prime;
