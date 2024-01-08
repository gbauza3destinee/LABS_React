import axios from "axios";

    async function getHandler() {
        const response = await axios.get( ); 
        console.log(response.data);
    }


// const Loginpage = {
// return(
   // <React.Fragment> 

    <div className="container">

    <h1> Login </h1>

    <input id="username"> Username </input>

    <input id="password"> Password</input>

    <button onClick = {getHandler}> Login </button>

    </div>
    // </React.Fragment> 
//)

export default loginPage;