import { useState } from "react";
function Native() {
    let [native, setnative] = useState("")
    function addNative(event) {
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.native;
        setnative(inputTag.value);
    }
    return (
        <div>
            <h1 className="">Native City :  {native}</h1>
            <form onSubmit={addNative}>
                <input type="text" name="native" placeholder="Enter ur NativeCity" className="Registration-items" />
                <button className="Registration-items">Submit</button>
            </form>
        </div>
    );
}
export default Native;