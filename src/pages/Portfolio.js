import React, { Component } from "react";
import Card from "../components/Card/Card"
// import API from "../utils/API";
// const repos =[]

const repos = [

    {

        'name': 'Write for Envato Tuts+',

        'duration': 120

    },

    {

        'name': 'Work out',

        'duration': 60

    },

    {

        'name': 'Procrastinate on Duolingo',

        'duration': 240

    }

];

export class Portfilio extends Component {

// was going to map through repos after filling it with the ajax call. 
    // loadNextDog = () => {
    //     API.getRepos()
    //         .then(
    //             repos = res.
    //             )
    //         )
    //         .catch(err => console.log(err));
// }
// { repos.map(repos => <h4>{repos.name}</h4>) }
    

    render() {
        return (
            <card>
            <div>
             <Card />
            </div>
            </card>
        );
    }

}
export default Portfilio;