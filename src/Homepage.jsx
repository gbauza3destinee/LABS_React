import 'App';
import React from 'react';



    // to Review : 
    // - What is the best practice file structure, do we declare it as a const object 
    // or as 
    // a no structure file that with elements. In the latter case does something
    // need to be returned? 
    // - Making An axios get call to route to a dashboard page contains a url that points 
    // to a server url or the actual url to route to (dashbaord page)?
    // - If I'm working with an object Assignment that needs to be displayed, 
    // should I pass it in as a props into the class or does it need to be loaded from an
    //  axios post call?


   /** 
    * In backend, assignment is an object with fields : 
    * 
    * const assignment = {
    * long id, 
    * String status, 
    * int number, 
    * String githubURL, String branch,
    * String reviewVideoUrl 
    * User user
    * }
    */

   /**
    * Second way to create this class 
    * 
    * const homepageComponent = (Assignment assignment ){
    *  return (
    *    ELEMENTS GO IN HERE & I can use an assignment object inside my div 
    * )
    * }
    */

// Fragment is used bc requires a Parent Element 
<React.Fragment>
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


</React.Fragment>


/**
 * Axios GET call 
 * - declare method async 
 * - method returns a response 
 * - post Assignment x 3 (wait on tom's response)
 * - get Dashboard URL -- what url 
 * 
 * const response = axios.get(" dashbaordurl.com ")
 * 
 * 
 * 
 * 
 */


export default Homepage.jsx;
