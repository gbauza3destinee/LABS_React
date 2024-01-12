import Axios from "axios";

class AssignmentPage extends React.Component {


    constructor(){
        super()
        this.state = { 
            assignmentList : null
        }

    }


    async getAssignment(){
        const response = await axios.get();
        if (response.data != null){

            assignmentList = response.data;

            for ( let i = 0; i < assignmentList.length; i++){
                return assignmentlist.get(i);
            }
        }
    }

    async postAssignment( assignment ){
        const response =  await axios.post(assignment );

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