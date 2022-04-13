import React, { Component } from "react";
import HornedBeast from "./Beast";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default class Main extends Component {

    render() {
        const renderArray = this.props.data.map((object) => {

            const searching = object.title.toLowerCase();
            if (this.props.searchData !== "" && !searching.includes(this.props.searchData)) {
                return null
            }

            if (this.props.hornSelected !== "" && !(parseInt(this.props.hornSelected) === object.horns)) {
                return null
            }

            return (<HornedBeast key={object.title} searchData={this.props.searchData} hornSelected={this.props.hornSelected} animal={object} openModal={this.props.modalTrue} />)
        })

        return (
            <div className='main'>
                <Container>
                    <Row sm={1} md={2} lg={3} xl={4}>
                        {renderArray}
                    </Row>
                </Container>
            </div>
        )
    }
}