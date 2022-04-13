import React, { Component } from "react";
import Beast from "./Beast";



import data from "./provided.json"
import "./App.css"
import "./style.css"


class Main extends Component {
    // console.log(data)
    // let beast = []
    // data.forEach((hornedBeast, index) => {
    //     beast.push(
    //         <Beast
    //             imgURL={hornedBeast.image_url}
    //             title={hornedBeast.title}
    //             description={hornedBeast.description}
    //             keyword={hornedBeast.keyword}
    //             key={index}

    //         />

    //     ))
    // }
    render() {


            return (
            <div className="main">
                
                        {data.map((hornedBeast, index) =>(
         
             <Beast
                 imgURL={hornedBeast.image_url}
                 title={hornedBeast.title}
                 description={hornedBeast.description}
                 keyword={hornedBeast.keyword}
                 key={index}

            />))}
                        
            </div>
        )


    }

}

export default Main