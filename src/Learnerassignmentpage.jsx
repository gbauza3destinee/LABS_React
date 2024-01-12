
/**
 * Axios calls : 
 * Route to Dashboard
 * Post assignment 
 * Get assignment and id number from backend 
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

    function LearnerAssignmentPage (){


        return (
            <div className="container">
                 <h1> Assignment Number</h1>
                <div> assignments.map((assignments)=> <li>{assignment}</li>)</div>

            <input id="githubUrl" type= "text"/>
            <input id="branch" type = "text"/>

            <button > Submit </button>
            <button > Back to Dashboard </button>
       
            </div>
        
        );


    }
    

    export default LearnerAssignmentPage;
