import React, { Component } from "react";
import HeaderTitle from "./headertitle.js";
import Search from "./search.js";
import Drop from "./Drop.js";

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            click: <HeaderTitle welcome='Welcome! Vote for  your favorite Horned Beast !!!' intro="Click the 💘 button to favorite an image" />,
        }
    }

    render() {
        return (
            <div className='heading'>
                <div>{this.state.click}</div>
                <Search onchange={this.props.onchange} />
                <Drop onchangetwo={this.props.onchangetwo} />
            </div>
        )
    }
}