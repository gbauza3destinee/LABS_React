import React from "react";

class Assignment extends React.Component{

    // Presentational component will get data from parent and display it
    /// whoever passes data is parent (assignment)
    // whoever receives/consumes data is child 
    // We pass props 
    constructor(props){

        super(props)

      
    }

    render(){

        console.log(this.props);

        return(
         <div>
              <span>{this.props.data.name}</span>
              <span>{this.props.data.id}</span>
              <span>{this.props.data.status}</span>
              <span> {this.props.data.githubUrl}</span>
              <span> {this.props.data.video}</span>
              <span> {this.props.data.branch} </span>
             </div>

        );
    }


}

export default Assignment;