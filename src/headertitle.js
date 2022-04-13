import React, { Component } from "react";

export default class HeaderComp1 extends Component {
    render() {
        return (
            <div className='center'>
                <h1 className={this.props.badClick}>{this.props.welcome}</h1>
                <p className={this.props.badClick}>{this.props.intro}</p>
            </div>
        )
    }
}