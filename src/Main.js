import React, { Component } from "react";
import Beast from "./Beast";
import hornedarray from "./provided.json"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import data from   "./provided.json"
import "./App.css"


class Main extends Component {
    render() {
        let beast = []
        this.props.data.forEach((hornedBeast, index) =>{
            beast.push(
                <Beast
                    imgURL={hornedBeast.image_url}
                    title={hornedBeast.title}
                    description={hornedBeast.description}
                    keyword={hornedBeast.keyword}
                    key={index}

                />

            )


        } );
        return (
            <main>
                {beast}
            </main>
        )
    }
    

}
export default Main