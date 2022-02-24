function Counter(){
    let count = 0;
    function increase(){
        count = count +1;
    }
    function decrease(){
        count = count -1;
    }
    function showCount(){
        alert(count)
    }
    return (
        <div>
            count = {count}
        <br/>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={showCount}>Show Count</button>
        </div>
        
    );
}
export default Counter;