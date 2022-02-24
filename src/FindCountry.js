import {useState,useEffect} from "react";
import axios from "axios";
const FindCountry=()=>{
    let [countries,setCountries]=useState(["default country"]);
    let [personName,setPersonName]=useState("intial name")
    useEffect(()=>{
        axios.get("https://api.nationalize.io?name=sumit").then((res)=>{
            console.log(res.data);
            setCountries(res.data.country);
        })
    },[]);
    const callServer=()=>{
        axios.get(`https://api.nationalize.io?name=${personName}`).then((res)=>{
            console.log(res.data);
            setCountries(res.data.country);
        })

    }
    return(
        <div className="Border">
            <h2>Your countries</h2>
            <input
            type="text"
            value={personName}
            onInput={
                (event)=>{
                    setPersonName(event.target.value)
                }
            }/>
            <button onClick={callServer}>Get Country</button>
            <ul>
                {countries.map((val)=>{
                    if(val.country_id !==""){
                        return <li>{val.country_id}</li>
                    }
                })}
            </ul>
        </div>
    )
}
export default FindCountry;