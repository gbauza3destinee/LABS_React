

    
    /**
     * Notes: 
     *  - Review HomePage & Learner Asignnment Page assignment mapping 
     */

    let assignments = [
        {
            id : "1",
            number : "1",
            branch: "DEV",
            status: "ENTER",
            reviewVideoUrl: "www.google.com",
            githubUrl : "www.github.com/username/repo",
            User : "user"

        },
        {
            id : "2",
            number : "2",
            branch: "DEV",
            status: "ENTER",
            reviewVideoUrl: "www.google.com",
            githubUrl : "www.github.com/username/repo",
            User : "user"

        },
        {
            id : "3",
            number : "3",
            branch: "DEV",
            status: "ENTER",
            reviewVideoUrl: "www.google.com",
            githubUrl : "www.github.com/username/repo",
            User : "user"

        }

    ]

    function HomePage(){

        return (
         
           

            // In Flexbox container contains logic for mapping assignment
            // 
            <div className="container">

            <div className="header">
                <h1> Welcome to the Assignment Review App </h1>
            </div>
        
            <div className="flexbox-container"> 

                <div>  
                   
                   assignments.map((assignments, assignment) => )
                   
                   <div > {assignment} </div>
                   <div> {assignment} </div>
                   <div> {assignment} </div>

                </div> 

             
            </div>
        
            <div className="bottom">
                <button> Go to dashboard</button>
            </div>
        
            </div>
       

        );


    }

   
    export default HomePage;



    
