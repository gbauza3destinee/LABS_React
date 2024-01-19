class LoginClass extends React.Component {

    constructor(){
        super()
        this.state = {
            username : "",
            password : "",
            token: " "
        };
    }




    checkToken() {
        useEffect(() => {
            console.log("Token changed");
            if (token != "") {
                window.location.href = "/dashboard";
            }
          }, [token])

    }    
    
    render(){
        return(
            <div className="container">

        <h1> Login </h1>
    
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        type ="text"
        id="password"
        value= {password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button> Login </button>
    
        </div>


        );
    }
}