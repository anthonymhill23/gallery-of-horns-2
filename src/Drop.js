import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Drop extends Component {

    render() {
        return (
            <Form className='search-field'>
                <Form.Select onChange={this.props.onchangetwo}>
                    <option value="">Select One From Dropdown</option>
                    <option value='1'>1 Horn</option>
                    <option value='2'>2 Horn</option>
                    <option value='3'>3 Horn</option>
                    <option value='100'>MAX HORNS (100!!!)</option>
                </Form.Select>
            </Form>
        )
    }
}