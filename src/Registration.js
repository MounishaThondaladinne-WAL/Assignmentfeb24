function Registration() {
    return(
    <div>
        <h1 className="Registration-heading">Registration Form</h1>
        <form>
            <input type="text" name="firstName" placeholder="Enter ur First Name" className="Registration-items" />
            <input type="text" name="lastName" placeholder="Enter ur Last Name" className="Registration-items" />
            <input type="email" name="email" placeholder="Enter ur Email" className="Registration-items"/>
            <input type="text" name="usertName" placeholder="Enter UserName" className="Registration-items" />
            <input type="number" name="age" placeholder="Enter ur Age" className="Registration-items"/>
            <button className="Registration-items">Submit</button>
        </form>
    </div>
    );
}
export default Registration;