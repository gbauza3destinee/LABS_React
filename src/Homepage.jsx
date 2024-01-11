

     /* 
     * const response = axios.get();
     *      Array of responses 
     *      Show all data 
     *      - State of assignment 
     */

     // Add into return statement a div 
     // <div> getAssignment(); 
     // this.getAssignmentList.map(assignment => Assignment data = {assignment} </div> )

    class HomePage extends React.Component {

        constructor(){
            this.state = {
                assignment = null;
            };

        }

        getAssignment(){
            axios.get()
            .then(response => this.setState(assignmentList : response.data))
        }
        render(){
            return (

        
            <div className="container">

            <div className="header">
                <h1> Welcome to the Assignment Review App </h1>
            </div>
        
            <div className="flexbox-container"> 

             
                <div> Assignment1</div> 
                <div> Assignment2</div>
                <div> Assignment3 </div>
            </div>
        
            <div className="bottom">
                <button> Go to dashboard</button>
            </div>
        
            </div>
       

       );
     }
        

    }

   
   
    export default HomePage;



    
