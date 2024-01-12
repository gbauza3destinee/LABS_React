
class Assignment extends React.Component{


    constructor(){

        super()

        this.state { 
            id : " 1", 
            status: "Ready",
            number : 3,
            githubUrl : "www.google.com",
            branch : "dev",
            video: "www.vimeo.com",
            user: null;
        }



    }

    render(){

        return(
            <div> {assignment} </div>

        );
    }



}