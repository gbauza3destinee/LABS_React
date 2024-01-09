import 'App';
import React from 'react';
import axios from "axios";


    // Questions: 
    // - What is the best practice file structure, do we declare it as a const object 
    // or as this file is (no structure just elements)-- is it required to return smthg. 
    // - If I'm working with an object 'Assignment' that needs to be displayed, 
    // should I pass it into const as a props or does it need to be loaded from an
    //  axios post call?
    // - What job does the App class have to integrate the other classes -- what logic is needed in that file to tie things up? 


    async function getHandler(){ // routes to dashboard page
        const response = await axios.get();
        console.log(response.data);

    }


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
        <button onClick={ getHandler}> Go to dashboard</button>
    </div>


</React.Fragment>



/** 
    * In backend, assignment is an object with fields , should I pass
    * an assignment into the const as a prop ? Or do I need to load from axios
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
     * Should state be used to create an object in jsx 
     *   const [person, setPerson] = useState({
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  });
     * 
     */



export default Homepage.jsx;
