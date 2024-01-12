class HomePageClass extends React.Component {


    constructor(assignmentlist){

        super()
        this. state = {
            assignmentlist : null
        }

    }


    async getAssignment(assignmentlist){
        const response = await axios.get()
        if (response.data != null){

            assignmentList = response.data;

            for ( let i = 0; i < assignmentList.length; i++){
                return assignmentlist.get(i);
            }
        }
    }


    
    
  

        render(){


            return(
                <div> 
                
                <H1> Welcome to the Assignment Review App </H1>

                {getAssignment}

                {getAssignment}

                {getAssignment}

                <button> Go to Dashboard</button>

                 </div>
            );
            
            

        }
    




}

export default HomePageClass;