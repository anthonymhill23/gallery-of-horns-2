import React, { Component } from "react";

class Beast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    }
  }
  handleClick = _ => {
    this.setState({ favorite: this.state.favorite + 1 })
  }
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} title={this.props.title} onClick={this.handleClick} alt={this.props.title} />
        <p>{this.props.description}</p>
      </>

    )
  }
}
export default Beast;