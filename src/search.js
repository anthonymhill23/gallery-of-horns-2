import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default class Search extends Component {

    render() {
        return (
            <InputGroup className='search-field'>
                <InputGroup.Text id='search1'>Search</InputGroup.Text>
                <FormControl
                    onChange={this.props.onchange}
                    placeholder='Image Name'
                    aria-label='Image Name'
                    aria-describedby='search1'
                />
            </InputGroup>
        )
    }
}