import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export default class SelectedBeast extends Component {

    handleClose = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} />
                <Modal.Body>
                    {this.props.selectedBeast.description}
                </Modal.Body>
                <Modal.Footer>Current Favorites: {this.props.favorite}</Modal.Footer>
            </Modal>
        )
    }
}