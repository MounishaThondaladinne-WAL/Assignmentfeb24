import {useState,useEffect} from 'react'
import axios from 'axios'
const FindGender =()=>{
    let [gender,setGender]=useState("defaultgender")
    let [personName,setPersonName]=useState("intial name")
    useEffect(()=>{
        axios.get(`https://api.genderize.io/?name=sumit`).then((res)=>{
            console.log(res.data);
            setGender(res.data.gender)
        })
    },[])

    const callServer=()=>{
        axios.get(`https://api.genderize.io/?name=${personName}`).then((res)=>{
            console.log(res.data);
            setGender(res.data.gender)
        })

    }

    return(
        <div className="App-div">
            <h1>Gender: {gender}</h1>
            <input type="text" value={personName} onInput={(event)=>{
                setPersonName(event.target.value)
            }}
            />
            <button onClick={callServer}>Get Gender</button>
            <ul>
                <li>{gender}</li>
            </ul>

        </div>
    )
}
export default FindGender