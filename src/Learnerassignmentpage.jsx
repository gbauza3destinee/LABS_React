import React from 'react';
import axios from "axios";


/**
 * Create a toggle list or an Enum 
 *  const Assignments = {
 *  Assignment1 : "id1 "
 *  Assignment2 : "id2"
 *  Assignment3 : "id3"
 * }
 * 
 */

async function getHandler()= {
    const response = axios.get();
    console.log(response.data);
}

async function postHandler()= { // post or submit assignment 
    const response = axios.post();
    console.log(response.data);
}

const learnerAssignmentPage = {

    return(
        <Fragment> 
        <div className="container">
        <h1> Assignment Number</h1>
        // Toggle List goes here 
        <input id="githubUrl" type= "text"/>
        <input id="branch" type = "text"/>

        <button onClick = {postHandler}> Submit </button>
        <button onClick = {getHandler} > Back to Dashboard </button>
       
        </div>
        </Fragment> 

    );
} 

export default learnerAssignmentPage;