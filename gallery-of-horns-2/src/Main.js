import React, { Component } from "react";
import Beast from "./Beast";



class Main extends Component {
    render() {
        return (
            <>
                <Beast imageUrl="https://via.placeholder.com/150" title= "beast 1" description="the first beast" />
                <Beast imageUrl="https://via.placeholder.com/150" title="beast 2" description="the second beast" />
            </>
        )
    }
}

export default Main;