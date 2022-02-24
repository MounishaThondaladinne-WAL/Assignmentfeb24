function Login2(){
    function signIn(event){
        event.preventDefault();
        alert('You are logged in');
    }
    
        return(
        <div>
            <h1 className="Registration-heading">LoginForm</h1>
            <form onSubmit={signIn}>
                <input type="number" name="number" placeholder="PhoneNumber" className="Registration-items" />
                <button className="Registration-items">Sign In</button>
            </form>
        </div>
        );
}
export default Login2;