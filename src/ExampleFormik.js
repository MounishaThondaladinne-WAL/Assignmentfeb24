import { useFormik,Field, Form } from "formik";
 const ExampleFormik =()=>{
     const formik = useFormik({
         initialValues:{
             email : "intialValues@gmail.com",
             password : "",
         },
         onSubmit(values){
            console.log(`form Submit`);
            let RegistrationObject ={
                Email:values.email,Password:values.password
            }
            console.log(RegistrationObject)
            localStorage.setItem("RegistrationCmponent",JSON.stringify(RegistrationObject))
         },
         validate(){
             const errors ={}
             if(formik.values.password.length <=4){
                 errors.password = "Must be More than 4 characters"
             }
             if(formik.values.email.length >=20){
                 errors.email = "cant be more than 20 characters"
             }
             return errors
         },
     });
     console.log(formik);
     return(
         <form onSubmit={formik.handleSubmit} noValidate>
             <div class="text-danger">{formik.errors.email?formik.errors.email:null}</div>
             <input type="email" name="email" value={formik.values.email}
             onChange={formik.handleChange}/>
              <input type="password" name="password" value={formik.values.password}
             onChange={formik.handleChange}/>
             <div class="text-danger">{formik.errors.password?formik.errors.password:null}</div>
             <button>submit</button>
         </form>
     )
 }
 export default ExampleFormik;