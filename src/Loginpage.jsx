


    // Send some data use POST -> Make another axios call for post to send username & password to 
    // Send username and password to a backend service 
    // backend needs to check in list to validate if username is present or not 
    // and if its the correct 
    // Create logic for happy case of valid username and password and edgecase 
    // From UI (Login page) pass username and password to backend application


    // async function postHandler(){
    //  const response = await axios.post();
    // LOGIC commumnicating with backend service 
    // if (response.data == )
    //  console.log(response.data);
    //}

    // create a function

    function LoginPage(){

        return (

        <div className="container">

        <h1> Login </h1>
    
        <input id="username"> Username </input>
    
        <input id="password"> Password</input>
    
        <button> Login </button>
    
        </div>

        );
        


    } 
   
  

export default LoginPage;
// export the actual function 