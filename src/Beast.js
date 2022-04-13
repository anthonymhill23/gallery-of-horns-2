import React, { Component } from "react";
import Emoji from "./emoji";
import Button from 'react-bootstrap/Button'
import { Card } from "react-bootstrap";

export default class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: 0,
        }
    }

    handleClick = _ => {
        this.setState({ favorite: this.state.favorite + 1 })
    }

    handleImgClick = _ => {
        this.props.openModal(this.props.animal, this.state.favorite);
    }

    render() {
        return (
            <Card style={{ height: '30rem' }}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Img src={this.props.imgURL} title={this.props.title} onClick={this.handleImgClick} />
                <Card.Text style={{ height: '4rem' }}>{this.props.description}</Card.Text>
                <Button style={{ height: '3rem', width: '3rem', margin: 'auto' }} onClick={this.handleClick}><Emoji symbol='💘' /></Button>
                <Card.Text>Favorites:{this.state.favorite}</Card.Text>
            </Card>
        )
    }
}