// import React from 'react';


    // Questions: 

    // -How do I reference three (3) 'Assignment' objects that needs to be displayed, 
   
    // - How does App instantiate and use the different components?

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



    
