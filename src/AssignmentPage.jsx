import Axios from "axios";

class AssignmentPage extends React.Component {


    constructor(assignmentList){
        super()
        this.state = { 
            assignmentList : null
        }

    }


    getAssignment(){
        const response = axios.get();
        if (response.data != null){

            assignmentList = response.data;

            for ( let i = 0; i < assignmentList.length; i++){
                return assignmentlist.get(i);
            }
        }
    }

    postAssignment( assignment ){
        const response = axios.post(assignment );

    }

    render(){
        return (
            <div> 
            <h1> Assignment Number </h1>
            <li> {getAssignment} </li>


            </div>
            
        );
    }
}