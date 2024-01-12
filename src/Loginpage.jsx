


    /**
     * Axios Call
     *  - Send data to login -> Post call passing data to backend -> Backend validates user + pass combo 
     *      - Returns a Response object that contains : status code, headers, data. 
     *      - Add if else logic to catch errors or successes
     * 
     */

  
    
    function LoginPage(){

        return (

        <div className="container">

        <h1> Login </h1>
    
        <input id="username"> Username </input>
    
        <input id="password"> Password</input>
    
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button> Login </button>
    
        </div>

        );
        


    } 
   
  

export default LoginPage;
