import Assignment from "./Assignment";
import React from "react";

// Add axios call in here - get hold of data from backend 


class AssignmentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      assignmentList: null,
    };
  }

  componentDidMount() {
    console.log("Inside Assignment Component Did Mount ");

    this.setState({
      assignmentList: [
        {
          name: "Assignment1",
          id: " 1",
          status: "Ready",
          number: 3,
          githubUrl: "www.google.com",
          branch: "dev",
          video: "www.vimeo.com",
          user: null,
        },

        {
          name: "Assignment2",
          id: " 2",
          status: "Ready",
          number: 3,
          githubUrl: "www.google.com",
          branch: "dev",
          video: "www.vimeo.com",
          user: null,
        },
        { 
        "name": "Assignment3",
        "id": "3", 
        "status": "Ready",
        "number": 3,
        "githubUrl": "www.google.com",
        "branch": "dev",
        "video": "www.vimeo.com",
        "user": null}],
    });
     
  }

  // View assignments in form of list

 
  render() {
    return (
     
         
               <div>
                   <ol>
                  {                 

            (this.state.assignmentList !=null && this.state.assignmentList.length > 0) ?
            this.state.assignmentList.map((assignment,index) => {
                        return (
                           
                                    <li  key = {index}>
                                        <Assignment data={assignment}></Assignment>
                                    </li>
                               
                        );
            })
            
            : <h1>No data</h1>

          }

          </ol>
            <input id="githubUrl"> Github Url </input>
            <input id="branch"> Branch </input>
            <button> Submit </button>
            <button> Go back to Dashboard </button>
        </div>
    )
  }

}
export default AssignmentPage;