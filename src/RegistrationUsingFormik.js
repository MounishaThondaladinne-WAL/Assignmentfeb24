import { useFormik,Field, Form } from "formik";
import { useState } from "react/cjs/react.development";
 const RegistrationFormik =()=>{
     let [details,setAllDetails]=useState([])
     const formik = useFormik({
         initialValues:{
             email : "",
             password : "",
             age:"",
             fullName:"",
         },
         onSubmit(values){
             console.log(`form Submit`);
             console.log(values.age)
             let RegistrationObject ={
                 Email:values.email,Password:values.password,Age:values.age,FullName:values.fullName
             }
             let DetailsObject = [...details,RegistrationObject]
             setAllDetails(DetailsObject)
             console.log(DetailsObject)
             localStorage.setItem("RegistrationCmponent",JSON.stringify(DetailsObject))
         },
         validate(){
             const errors ={}
             if(formik.values.email.length<5 ||formik.values.email.length>=30){
                 errors.email = "Must be More than 5 characters and Less than 30 characters"
             }
             if(formik.values.password.length <4 || formik.values.password.length>=20){
                errors.password = "Must be More than 4 characters and Less than 20 characters"
            }
             if(formik.values.age <18||formik.values.age>=120){
                 errors.age= "Age Between 18 and 120"
             }
             if(formik.values.fullName.length<=4||formik.values.fullName.length>=20){
                 errors.fullName = "Must be more than 4 characters and less than 20 charcters"
             }
             return errors
         },
     });
     console.log(formik);
     return(
         <div class ="Regstration">
             <h1 className="Todo-heading">Registration Form</h1>
         <form onSubmit={formik.handleSubmit} className="Registration-form" noValidate>
             <div class="text-danger">{formik.errors.email?formik.errors.email:null}</div>
             <input type="email" name="email" value={formik.values.email} placeholder="Enter ur Email"
             onChange={formik.handleChange} className="Registration-input"/>
             <div class="text-danger">{formik.errors.password?formik.errors.password:null}</div>
              <input type="password" name="password" value={formik.values.password} placeholder="Enter ur Password"
             onChange={formik.handleChange} className="Registration-input"/>
             <div class="text-danger">{formik.errors.age?formik.errors.age:null}</div>
             <input type="number" name = "age" value={formik.values.age} 
             onChange={formik.handleChange} placeholder="Enter ur Age"className="Registration-input"/>
             <div class="text-danger">{formik.errors.fullName?formik.errors.fullName:null}</div>
             <input type="text" name = "fullName" value={formik.values.fullName} placeholder="Enter Ur FullName"
             onChange={formik.handleChange} className="Registration-input"/><br/>
             <button className="Registration-input">submit</button>
         </form>
         </div>
     )
 }
 export default RegistrationFormik;