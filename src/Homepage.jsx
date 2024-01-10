

    // Questions: 
    // - How do I reference three (3) 'Assignment' objects from the backend that need to be displayed? Can I pass it in thru a class declaration or axios call?
    // - What does an Axios call return? How do we know an axios call failed to do action? 
    // - How does App instantiate and use the different components?

    /**
     * Axios Calls : 
     *  
     * 
     */

    function HomePage(){

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

    // Can I pass a running instance of Assignment object in through the class like this? 

    /**
     * class HomePage extends React.Component {
     *      constructor(Assignment assignment, Assignment assignment, Assignment assignment){
     *          super();
     *          this.state = { Assignment assignment, Assignment assignment, Assignment assignment };
     *       render(){
     *             return   
     *          
     *              <div className="container">

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
       
     * 
     *      }
     *      }
     * }
     */

   
    export default HomePage;



    
