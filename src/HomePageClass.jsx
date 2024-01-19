import Assignment from "./Assignment";
import React from "react";

// Learned: 
// to pass props we can reference a prop being passed into a function(prop)
// or we can use what vars are declared within the class (this.state.assignmentList)
// 
class HomePageClass extends React.Component {
  constructor() {
    super();
    this.state = {
      assignmentlist: null,
    };

    console.log("Inside constructor");
  }

  // makes api axios calls 
  componentDidMount() {
    console.log("Inside Component Did Mount ");

    this.setState({
      assignmentList: [{ 
        "name": "A1",
        "id": " 1", 
        "status": "Ready",
        "number": 3,
        "githubUrl": "www.google.com",
        "branch": "dev",
        "video": "www.vimeo.com",
        "user": null
    }, 
    {  
    "name": "A2",
    "id": " 2", 
    "status": "Ready",
    "number": 3,
    "githubUrl": "www.google.com",
    "branch": "dev",
    "video": "www.vimeo.com",
    "user": null 
    }, 
    { 
    "name": "A3",
    "id": "3", 
    "status": "Ready",
    "number": 3,
    "githubUrl": "www.google.com",
    "branch": "dev",
    "video": "www.vimeo.com",
    "user": null}],
    });

  }

// loads presentational component has html elements 
  render() {
    console.log("Inside render");
    console.log(this.state.assignmentList);
    return (
      <div>
        <h2> Welcome to the Assignment Review App </h2>

            { (this.state.assignmentList !=null && this.state.assignmentList.length > 0) ?
            this.state.assignmentList.map((assignment,index) =>(<Assignment key={index}> 
                <span>{assignment.name} </span>
                <span>{assignment.id}</span>
                <span> {assignment.branch}</span>
                <span> {assignment.number}</span>
                <span> {assignment.githubUrl}</span>
                <span> {assignment.video} </span>

            </Assignment>)) 
             : <div> No Assignments</div>}
        <button> Go to Dashboard </button>
      </div>
    );

  }
}

export default HomePageClass;